import React from 'react'
import { Link } from 'react-router-dom'
import ComponentInsidePage1 from '../../components/ComponentInsidePage1'
import styles from './Page1.module.css'
import $ from "jquery";

function Page1() {
  return (
    <div className='page1'>
        <h1>Page1</h1>
        <Link to='/page2'>Goto Page2</Link>
        <p className={`${styles.paragraph} paragraph`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta a, sunt, itaque id aperiam sit alias quasi recusandae fugiat exercitationem placeat neque molestias suscipit ex commodi! Nostrum quibusdam saepe amet sunt enim voluptatibus culpa labore cupiditate aliquam veniam a quia repellat, placeat, fuga reprehenderit animi quas consectetur qui voluptates cumque!
        </p>
        <ComponentInsidePage1/>
    </div>
  )
}

export default Page1