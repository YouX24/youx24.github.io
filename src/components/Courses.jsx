const Courses = () => {

    return (
        <div className="flex flex-col flex-start text-white">
            <p className="my-6 font-bold text-sm sm:text-base">Relevant Coursework:</p>
            <p className="my-3 text-sm sm:text-base">Computer Science</p>
            <ul className="list-[circle] pl-8 text-sm sm:text-base">
                <li>Advanced Programming and Data Structures (CS 245)</li>
                <li>Computer Systems (CS 252)</li>
                <li>Database Systems (CS 260)</li>
                <li>Web Systems (CS 268)</li>
                <li>Fundamentals of Web Page Design (CS 318)</li>
                <li>Introduction to Web Programming (CS 319)</li>
                <li>Programming Languages (CS 330)</li>
                <li>Algorithms (CS 335)</li>
                <li>Computer Architecture (CS 352)</li>
                <li>Software Engineering I (CS 355)</li>
                <li>Cryptography and Network Security (CS 376)</li>
                <li>Operating Systems (CS 452)</li>
                <li>Software Engineering II (CS 485)</li>
            </ul>
            <p className="my-3 text-sm sm:text-base">Information Systems</p>
            <ul className="list-[circle] pl-8 text-sm sm:text-base">
                <li>Information Systems in Business (IS 240)</li>
                <li>Fundamentals of Business Programming (IS 304)</li>
                <li>Introduction to Business Analytics (IS 307)</li>
                <li>Business Process Modeling (IS 310)</li>
                <li>Advaned Business Programming (IS 314)</li>
            </ul>
        </div>
    )
}

export default Courses