import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

export interface GAutocompleteOption {
    label: string
    value: string
}

interface IProps {
    options: GAutocompleteOption[]
    value?: GAutocompleteOption | null
    onChange?: (value: GAutocompleteOption | null) => void
    className?: ''
    selectContainerClassName?: string
}

const GAutocomplete: React.FC<IProps> = ({
    options,
    onChange,
    value = null,
    className = '',
    selectContainerClassName = ''
}) => {
    const [query, setQuery] = useState<string>("")
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [filtered, setFiltered] = useState<GAutocompleteOption[]>(options)


    const wrapperRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        setFiltered(
            options.filter((opt) =>
                opt.label.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query, options])

    useEffect(() => {
        if (value) {
            setQuery(value.label);
        } else {
            setQuery("");
        }
    }, [value])


    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const handleSelect = (option: GAutocompleteOption) => {
        onChange?.(option)
        setIsOpen(false)
    }

    return (
        <Wrapper ref={wrapperRef} className={className}>
            <SelectContainer className={selectContainerClassName}>
                <Input
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value)
                        setIsOpen(true)
                    }}
                    onFocus={() => setIsOpen(true)}
                />
                <ArrowContainer onClick={() => setIsOpen(true)}>
                    <ArrowIcon viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6" />
                    </ArrowIcon>
                </ArrowContainer>
            </SelectContainer>
            {isOpen && (
                <Dropdown>
                    {
                        filtered.length === 0 ?
                            (
                                <NoOption>
                                    No Option
                                </NoOption>
                            ) : (
                                filtered.map((v, k) => {
                                    return <OptionItem
                                        key={k}
                                        onClick={() => handleSelect(v)}
                                        $isSelected={value?.value === v.value}
                                    >
                                        {v.label}
                                    </OptionItem>
                                })
                            )
                    }
                </Dropdown>
            )}
        </Wrapper>
    )
}

export default GAutocomplete

const Wrapper = styled.div`
    width: 12.5rem;
    position: relative;
`

const SelectContainer = styled.div`
    display: flex;
    align-itmes: center;
    justify-content: center;
    max-width: inherit;
    border: 1px solid #9ca3af;
    border-radius: 0.25rem;
    transition: all 0.3s ease-in-out;
    padding-left: 0.5rem
`

const Input = styled.input`
    flex: 1;
    padding: 0.5rem 0;
    font-size: 0.75rem;
    border-radius: 0.25rem;
    line-height: 1;
    border: none;
    background: transparent;
    box-sizing: border-box;
    color: inherit;

    &:focus {
        outline: none;
        box-shadow: none;
    }
`

const ArrowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    padding: 0 0.5rem;
    cursor: pointer;
`

const ArrowIcon = styled.svg`
    width: 16px;
    height: 16px;
    fill: none;
    stroke: #555;
    stroke-width: 2;
`

const Dropdown = styled.ul`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    max-height: 180px;
    background: white;
    border: 1px solid #9ca3af;
    border-radius: 0.25rem;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
    overflow-y: auto;
    list-style: none;
    padding: 0;
    margin: 0;
    z-index: 20;
`

const OptionItem = styled.li<{ $isSelected?: boolean }>`
    font-size: 0.75rem;
    padding: 0.5rem 0.5rem;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    background: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.primary : 'white')};
    color: ${({ theme, $isSelected }) => ($isSelected ? 'white' : '404040')};

    &:hover {
        background: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.primary : `color-mix(in srgb, white 90%, ${theme.colors.primary})`)};
    }
`;

const NoOption = styled.li`
    font-size: 0.75rem;
    text-align: center;
    font-weight: 500;
    padding: 0.5rem 0.5rem;
`