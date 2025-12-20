import PreviewPage from './PreviewPage'
import LoginFormStory from './pages/LoginFormStory'

export default {
    title: 'Preview/Design System',
    parameters: { layout: 'fullscreen' },
}

export const LoginStory = {
    render: () => <LoginFormStory />,
}
