import React from 'react';
import '../Styles/signup.css';
import { Link } from 'react-router-dom';

const PersonalDetails = () => {
    return (
        <section id='body'>
            <section className="container">
                <header>Personal Address</header>
                <form action="#" className="form">
                    <div className="input-box address">
                        {/* <label>Personal Address</label> */}
                        <input type="text" placeholder="Enter street address" required />
                        <input type="text" placeholder="Enter your city" required />
                        <div className="column">
                            <div className="select-box">
                                <select>
                                    <option hidden>State</option>
                                    <option>Jharkahnd</option>
                                    <option>Karnataka</option>
                                    <option>Maharastra</option>
                                    <option>Telangana</option>
                                </select>
                            </div>
                        </div>
                        <div className="column">
                            <input type="number" placeholder="Enter postal code" required />
                        </div>
                    </div>
                    <div className="check-box">
                        <div className="check-option">
                            <div className="check">
                                {/* <input type="radio" id="check-male" name="check"/> */}
                                {/* <label>I Agree Your Terms & Conditions</label> */}
                            </div>
                        </div>
                    </div>
                    <Link to='/terms&condition'>
                        <button className='submit'>Submit</button>
                    </Link>
                </form>
            </section>
        </section>
    )
}

export default PersonalDetails;