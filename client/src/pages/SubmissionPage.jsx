import { Link } from "react-router-dom"

function SubmissionPage() {
    return <div>
        <h1>Successfully Submitted</h1>
        <Link to='/dashboard'>Return to home page</Link>
    </div>
}

export default SubmissionPage;