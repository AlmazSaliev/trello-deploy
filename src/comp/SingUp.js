import { useRef, useState } from 'react'
import './SingUp.css'
import left from './foto/left.png'
import right from './foto/right.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from './logika/uiSlice'

export const SingUp=()=>{
    let dispatch = useDispatch()
    let validate = useSelector(user=>user.ui.userdata)
    console.log(validate);
    let[value, setValue]=useState({
        email: '',
        password: '',
        proverkaEmail: false,
        proverkaPassword: false,
        enterEmail: false,
        enterPassword: false,
        emailerror: false,
        passworderror: false,
    })
    function onchang(e){
        let getValue = e.target.value
        if(e.target.name==='email'){
            setValue({
                ...value,
                email: value.email = getValue,
                proverkaEmail: value.proverkaEmail = getValue.trim()!=='' && getValue.length > 3,
                enterEmail: true,
            })
        }
        if(e.target.name==='password'){
            setValue({
                ...value,
                password: value.password = getValue,
                proverkaPassword: value.proverkaPassword = getValue.trim()!=='' && getValue.length > 6,
                enterPassword: true,
            })
        }
    }
    let userefbtn = useRef()
    function submit(e){
        e.preventDefault()
        
        if(value.proverkaEmail === false ){
            setValue({
                ...value,
                enterEmail: value.enterEmail = true
            })

            return
        }
        if(value.proverkaPassword === false){
            setValue({
                ...value,
                enterPassword: value.enterPassword = true
            })
            return
        }
       
        if(validate.emailerror===false){
            dispatch(uiActions.getuserdata({email: value.email}))
            setValue({
                ...value,
                emailerror: true,
            })
            return
        }
       
        if(validate.passworderror === false){
            dispatch(uiActions.getuserdata({password: value.password}))
            setValue({
                ...value,
                passworderror: true,
            })
            return   
        }
        
        userefbtn.current.click()
        if(value.proverkaEmail && value.proverkaPassword){
            setValue({
                ...value,
                email: '',
                password: '',
            })
        }
    }
    let email = !value.proverkaEmail && value.enterEmail
    let password = !value.proverkaPassword && value.enterPassword
    
    let styleEmail = email ? 'inp inp2' : 'inp '
    let stylePassword = password ? 'inp inp2' : 'inp '
    return(
        <div className='cont-login'>
            <img className='img-trello' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/468px-Trello-logo-blue.svg.png" alt="logo"/>
                <div className='login-box'>
                    <form onSubmit={submit} className='box'>
                        {email && <p>Отсутствует адрес эл почты</p>}
                        {password && <p>Пароль должен быть больше 6 символов</p>}
                        {value.emailerror && <p>Неправильный адресс электронной почты</p>}
                        {value.passworderror && <p>Неправильный пароль</p>}

                            <h1>Вход в Trello</h1>
                            <div className={styleEmail}>
                                <input type='email' name='email' autoFocus={true} onChange={onchang} value={value.email} placeholder='Укажите адрес электронной почты'/>
                            </div>
                            <div className={stylePassword}>
                                <input type='password' name='password'  onChange={onchang} value={value.password} placeholder='Введите пароль'/>
                            </div>
                            <Link ref={userefbtn} to='/workpage'></Link>
                        <button type='submit' className='btn'>Войти</button>
                        <div className='form-btn'>
                            <p>или</p>
                            <div>
                                <button className='btn btn-plus'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/36px-Google_%22G%22_Logo.svg.png' alt='logo'/> Войти через Google</button>
                                <button className='btn btn-plus'><img src='https://www.pngkey.com/png/detail/331-3319083_microsoft-logo-icon-png-transparent-icon-microsoft-logo.png' alt='logo'/> Войти через Microsoft</button>
                                <button className='btn btn-plus'><img src='https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png' alt='logo'/> Войти через Apple</button>
                                <a className='btn-a'>Вход с помощью SSO</a>
                            </div> 
                            
                        </div>
                        <hr/>
                        <div className='a'>
                            <a>Не удается войти?</a>
                            <span className='span'>.</span>
                            <a>Зарегистрировать аккаунт</a>
                        </div>
                    </form> 
                   
                </div>  
                        <div className='a new-a'>
                            <a>Политика конфиденциальности</a>
                            <span>.</span>
                            <a>Условия использования</a>
                        </div>  
                        <select className='select'>
                            <option>Выберите язык</option>
                            <optgroup>
                                <option>Кыргызский</option>
                                <option>Русский</option>
                                <option>Английский</option>
                                <option>Немецский</option> 
                            </optgroup>
                        </select>
                        <hr/>
                        <img className='img-form' src='https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg' alt='logo'/>
                        <div className='a-footer'>
                            <a>Шаблоны</a>
                            <a>Цены</a>
                            <a>Приложения</a>
                            <a>Ваканции</a>
                            <a>Блог</a>
                            <a>Разработчики</a>
                            <a>О нас</a>
                            <a>Помощь</a>
                            <a>Настройки файлов cookie</a>
                        </div>
                        <img className='img-footer-left' src={left} alt='foto'/>
                        <img className='img-footer-right' src={right} alt='foto'/>
                        
        </div>
    )
}