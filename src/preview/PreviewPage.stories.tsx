import PreviewPage from './PreviewPage'
import LoginFormStory from './pages/LoginFormStory'
import DashboardStory from './pages/DashboardStory'

export default {
    title: 'Preview/Design System',
    parameters: { layout: 'fullscreen' },
}

export const LoginStory = {
    render: () => <LoginFormStory />,
}

export const Dashboard = {
    render: () => <DashboardStory />,
}
