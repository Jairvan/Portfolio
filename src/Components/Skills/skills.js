import React from 'react';
import pythonsvg from '../../assets/svg/python.svg';
import jssvg from '../../assets/svg/js.svg';
import javasvg from '../../assets/svg/java.svg';
import phpsvg from '../../assets/svg/php.svg';
import cplus from '../../assets/svg/cplus.svg';
import html from '../../assets/svg/html.svg';
import sql from '../../assets/svg/sql.svg';
import css from '../../assets/svg/css.svg';


import mysql from '../../assets/svg/mysql.svg';
import reactjs from '../../assets/svg/reactjs.svg';
import sqlserver from '../../assets/svg/sqlserver.svg';
import nodejs from '../../assets/svg/nodejs.svg';
import nextjs from '../../assets/svg/nextjs.svg';
import './skills.css';

const Skills = () => {
  return (
    <div className="container-skills">
      <div className='container-content-skills'> 
        <h1>SKILLS</h1>

        <div className='Progflex'>
          <h2>PROGRAMMING LANGUAGE</h2>
          <div className='svg-container-skills'>
              <div className='svg-flex'>
                <div className='box'>
                  <div className='pic'><img src={ pythonsvg } alt='' width={150} height={100}/></div>
                  <div className="gray">
                    <div className='seven5'></div>
                  </div>
                </div>
              </div>

              <div className='svg-flex'>
                <div className='box'>
                  <img src={jssvg} alt='' width={150} height={100}/>
                  <div className="gray">
                    <div className='eight0'></div>
                  </div>
                </div>
              </div>
              
              <div className='svg-flex'>
                <div className='box'>
                  <img src={javasvg} alt='' width={150} height={100}/>
                  <div className="gray">
                    <div className='eight0'></div>
                  </div>
                </div>
              </div>
              <div className='svg-flex'>
                <div className='box'>
                  <img src={phpsvg} alt='' width={150} height={100}/>
                  <div className="gray">
                    <div className='six0'></div>
                  </div>
                </div>
              </div>

              <div className='svg-flex'>
                <div className='box'>
                  <img src={cplus} alt='' width={150} height={100}/>
                  <div className="gray">
                    <div className='six0'></div>
                  </div>
                </div>
              </div>
              
              <div className='svg-flex'>
                <div className='box'>
                  <img src={html} alt='' width={150} height={100}/>
                  <div className="gray">
                    <div className='nine0'></div>
                  </div>
                </div>
              </div>

              <div className='svg-flex'>
                <div className='box'>
                  <img src={sql} alt='' width={150} height={100}/>
                  <div className="gray">
                    <div className='seven5'></div>
                  </div>
                </div>
              </div>

              <div className='svg-flex'>
                <div className='box'>
                  <img src={css} alt='' width={150} height={100}/>
                  <div className="gray">
                    <div className='nine0'></div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

       
          <div className='break'> </div>


          <div className='Progflex'>
          <h2>WEB DEVELOPMENT TECH STACKS</h2>
          <div className='svg-container-skills'>
              <div className='svg-flex'>
                <div className='box'>
                  <img src={ mysql } alt='' width={150} height={100}/>
                  <div className="gray">
                    <div className='six0'></div>
                  </div>
                </div>
              </div>
              <div className='svg-flex'>
                <div className='box'>
                  <img src={sqlserver} alt='' width={150} height={100}/>
                  <div className="gray">
                    <div className='six0'></div>
                  </div>
                </div>
              </div>
              <div className='svg-flex'>
                <div className='box'>
                  <img src={reactjs} alt='' width={150} height={100}/>
                  <div className="gray">
                    <div className='eight0'></div>
                  </div>
                </div>
              </div>

             
              <div className='svg-flex'>
                <div className='box'>
                  <img src={nodejs} alt='' width={150} height={100}/>
                  <div className="gray">
                    <div className='eight0'></div>
                  </div>
                </div>
              </div>

              <div className='svg-flex'>
                <div className='box'>
                  <img src={nextjs  } alt='' width={150} height={100}/>
                  <div className="gray">
                    <div className='eight0'></div>
                  </div>
                </div>
              </div>
<div className='break'> </div>
            </div>
          </div>


      </div>
    </div>
  )
}

export default Skills; 