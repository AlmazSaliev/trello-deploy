
import { Link } from 'react-router-dom'
import './StyleAllPages.css'
export const AllPages = () =>{

    return(
        <div className='big-box'>
            <header className='head'>
                <div className='header-nav'>
                    <div className='img-div-logo'>
                        <img className='img-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/468px-Trello-logo-blue.svg.png" alt="logo"/>
                    </div>
                    <nav>
                        <div className='nav'>
                            <button>Features <img className='img-arr' src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-keyboard-arrow-down_90691.png" alt="array"/></button>
                            <button>Solution <img className='img-arr' src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-keyboard-arrow-down_90691.png" alt="array"/></button>
                            <button>Plans<img className='img-arr' src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-keyboard-arrow-down_90691.png" alt="array"/></button>
                            <button>Pricing</button>
                            <button>Resources <img className='img-arr' src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-keyboard-arrow-down_90691.png" alt="array"/></button> 
                        </div>
                        
                    </nav>
                </div>
                <div className='header-login'>
                    <Link to='/registration'><button>Log in</button></Link>
                    <div>
                        <Link to='/registration'><button>Get Trello for free</button></Link></div>
                </div>
            </header>
            <section className='section1'>
                <div className='sect-div1'>
                    <h1>Trello helps teams move work forward.</h1>
                    <p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
                    <div className='sect-div2'>
                        <input type='email' placeholder='Email'/>
                        <Link to='/registration'><button>Sing up - it's free</button></Link>
                    </div>
                </div>
                <div className='sect-div3'>
                    <img src='https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=1200&fm=webp' alt='foto'/>
                </div>
            </section>
            <section className='section1 section2'>
                <div className='sect-div1 sect-div1-1'>
                    <h1>It's more than work. It's a way of working together.</h1>
                    <p>Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
                    <div className='sect-div2 sect-div2-2'>
                        <Link to='/registration'><button>Start doing</button></Link>
                    </div>
                </div>
                <div className='sect-div3 sect-div3-3'>
                    <img src='https://images.ctfassets.net/rz1oowkt5gyp/7pYWhpQ3vnntxoShaImNws/777fabbf069416489167ab92027ce086/board.png?w=1200&fm=webp' alt='foto'/>
                    <p>Join over 2,000,000 teams worldwide that are using Trello to get more done.</p>
                </div>
            </section>
        </div>
    )
}