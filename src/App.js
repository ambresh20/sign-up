// import { useState } from 'react'; 
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState( {
    firstName:"",
    middleName:"", 
    lastName:"",
    email:"",
    country:"",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  } ) ;

  // console.log(formData) ; 
  function changeHandler(event){

    setFormData( (prevFormData) => {
      const {name, value, checked, type} = event.target ;
      console.log(name) ;
      console.log(type) ;
      console.log(value) ;
      console.log(checked) ;

      return {
        // ...prevFormData,  [event.target.name] : event.target.value 
        ...prevFormData, [name]: type === "checkbox" ? checked : value
      } ;
    }) ;
  }

  function submitHandler(event) {

    event.preventDefault();
    alert("Saved Successfull - Your Data \n" + formData)
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      comments: false,
      candidates: false,
      offers: false,
      pushNotifications: "",
    })

  }

  return (
    <div className="w-full md:max-w-[50%] mx-auto shadow-2xl p-8 ">
        <form onSubmit={submitHandler} className='space-y-2'>

          <label htmlFor="firstName" className='text-gray-900 leading-6 text-sm font-medium'>First Name</label> <br />

          <input 
          onChange={changeHandler} value={formData.firstName}
          type="text" placeholder="Ambresh" id="firstName" name='firstName'
          className='w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal' />
          <br /> <br />


          <label htmlFor="middleName" className='text-gray-900 leading-6 text-sm font-medium'>Middle Name</label> <br />

          <input 
          onChange={changeHandler} value={formData.middleName}
          type="text" placeholder="Kumar" id="middleName"  name='middleName'
          className='w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal'/>
          <br /> <br />


          <label htmlFor="lastName" className='text-gray-900 leading-6 text-sm font-medium'>Last Name</label> <br />

          <input
          onChange={changeHandler} value={formData.lastName}
          type="text" placeholder="Vaishya" id="lastName" name='lastName'
          className='w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal'/>
          <br /> <br />


          <label htmlFor="email" className='text-gray-900 leading-6 text-sm font-medium'>Email Address</label> <br />

          <input
          onChange={changeHandler} value={formData.email}
          type="email" placeholder="ambreshvaishya321@gmail.com" id="email"  name='email'
          className='w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal'/>
          <br /> <br />


          <label 
          className='text-gray-900 leading-6 text-sm font-medium'>Country</label> <br/>

          <select 
          onChange={changeHandler} value={formData.country}
          id="country" name="country"
          className='w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal ' >
            <option>Select country</option>
            <option value="AF">Afghanistan</option>
            <option value="AX">Aland Islands</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AQ">Antarctica</option>
            <option value="AG">Antigua and Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaijan</option>
            <option value="BS">Bahamas</option>
            <option value="BH">Bahrain</option>
            <option value="BD">Bangladesh</option>
            <option value="BB">Barbados</option>
            <option value="BY">Belarus</option>
            <option value="BE">Belgium</option>
            <option value="BZ">Belize</option>
            <option value="BJ">Benin</option>
            <option value="BM">Bermuda</option>
            <option value="BT">Bhutan</option>
            <option value="BO">Bolivia</option>
            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
            <option value="BA">Bosnia and Herzegovina</option>
            <option value="BW">Botswana</option>
            <option value="BV">Bouvet Island</option>
            <option value="BR">Brazil</option>
            <option value="IO">British Indian Ocean Territory</option>
            <option value="BN">Brunei Darussalam</option>
            <option value="BG">Bulgaria</option>
            <option value="BF">Burkina Faso</option>
            <option value="BI">Burundi</option>
            <option value="KH">Cambodia</option>
            <option value="CM">Cameroon</option>
            <option value="CA">Canada</option>
            <option value="CV">Cape Verde</option>
            <option value="KY">Cayman Islands</option>
            <option value="CF">Central African Republic</option>
            <option value="TD">Chad</option>
            <option value="CL">Chile</option>
            <option value="CN">China</option>
            <option value="CX">Christmas Island</option>
            <option value="CC">Cocos (Keeling) Islands</option>
            <option value="CO">Colombia</option>
            <option value="KM">Comoros</option>
            <option value="CG">Congo</option>
            <option value="CD">Congo, Democratic Republic of the Congo</option>
            <option value="CK">Cook Islands</option>
            <option value="CR">Costa Rica</option>
            <option value="CI">Cote D'Ivoire</option>
            <option value="HR">Croatia</option>
            <option value="CU">Cuba</option>
            <option value="CW">Curacao</option>
            <option value="CY">Cyprus</option>
            <option value="CZ">Czech Republic</option>
            <option value="DK">Denmark</option>
            <option value="DJ">Djibouti</option>
            <option value="DM">Dominica</option>
            <option value="DO">Dominican Republic</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egypt</option>
            <option value="SV">El Salvador</option>
            <option value="GQ">Equatorial Guinea</option>
            <option value="ER">Eritrea</option>
            <option value="EE">Estonia</option>
            <option value="ET">Ethiopia</option>
            <option value="FK">Falkland Islands (Malvinas)</option>
            <option value="FO">Faroe Islands</option>
            <option value="FJ">Fiji</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="GF">French Guiana</option>
            <option value="PF">French Polynesia</option>
            <option value="TF">French Southern Territories</option>
            <option value="GA">Gabon</option>
            <option value="GM">Gambia</option>
            <option value="GE">Georgia</option>
            <option value="DE">Germany</option>
            <option value="GH">Ghana</option>
            <option value="GI">Gibraltar</option>
            <option value="GR">Greece</option>
            <option value="GL">Greenland</option>
            <option value="GD">Grenada</option>
            <option value="GP">Guadeloupe</option>
            <option value="GU">Guam</option>
            <option value="GT">Guatemala</option>
            <option value="GG">Guernsey</option>
            <option value="GN">Guinea</option>
            <option value="GW">Guinea-Bissau</option>
            <option value="GY">Guyana</option>
            <option value="HT">Haiti</option>
            <option value="HM">Heard Island and Mcdonald Islands</option>
            <option value="VA">Holy See (Vatican City State)</option>
            <option value="HN">Honduras</option>
            <option value="HK">Hong Kong</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="IN" selected>India</option>
            <option value="ID">Indonesia</option>
            <option value="IR">Iran, Islamic Republic of</option>
            <option value="IQ">Iraq</option>
            <option value="IE">Ireland</option>
            <option value="IM">Isle of Man</option>
            <option value="IL">Israel</option>
            <option value="IT">Italy</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japan</option>
            <option value="JE">Jersey</option>
            <option value="JO">Jordan</option>
            <option value="KZ">Kazakhstan</option>
            <option value="KE">Kenya</option>
            <option value="KI">Kiribati</option>
            <option value="KP">Korea, Democratic People's Republic of</option>
            <option value="KR">Korea, Republic of</option>
            <option value="XK">Kosovo</option>
            <option value="KW">Kuwait</option>
            <option value="KG">Kyrgyzstan</option>
            <option value="LA">Lao People's Democratic Republic</option>
            <option value="LV">Latvia</option>
            <option value="LB">Lebanon</option>
            <option value="LS">Lesotho</option>
            <option value="LR">Liberia</option>
            <option value="LY">Libyan Arab Jamahiriya</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lithuania</option>
            <option value="LU">Luxembourg</option>
            <option value="MO">Macao</option>
            <option value="MK">
              Macedonia, the Former Yugoslav Republic of
            </option>
            <option value="MG">Madagascar</option>
            <option value="MW">Malawi</option>
            <option value="MY">Malaysia</option>
            <option value="MV">Maldives</option>
            <option value="ML">Mali</option>
            <option value="MT">Malta</option>
            <option value="MH">Marshall Islands</option>
            <option value="MQ">Martinique</option>
            <option value="MR">Mauritania</option>
            <option value="MU">Mauritius</option>
            <option value="YT">Mayotte</option>
            <option value="MX">Mexico</option>
            <option value="FM">Micronesia, Federated States of</option>
            <option value="MD">Moldova, Republic of</option>
            <option value="MC">Monaco</option>
            <option value="MN">Mongolia</option>
            <option value="ME">Montenegro</option>
            <option value="MS">Montserrat</option>
            <option value="MA">Morocco</option>
            <option value="MZ">Mozambique</option>
            <option value="MM">Myanmar</option>
            <option value="NA">Namibia</option>
            <option value="NR">Nauru</option>
            <option value="NP">Nepal</option>
            <option value="NL">Netherlands</option>
            <option value="AN">Netherlands Antilles</option>
            <option value="NC">New Caledonia</option>
            <option value="NZ">New Zealand</option>
            <option value="NI">Nicaragua</option>
            <option value="NE">Niger</option>
            <option value="NG">Nigeria</option>
            <option value="NU">Niue</option>
            <option value="NF">Norfolk Island</option>
            <option value="MP">Northern Mariana Islands</option>
            <option value="NO">Norway</option>
            <option value="OM">Oman</option>
            <option value="PK">Pakistan</option>
            <option value="PW">Palau</option>
            <option value="PS">Palestinian Territory, Occupied</option>
            <option value="PA">Panama</option>
            <option value="PG">Papua New Guinea</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Peru</option>
            <option value="PH">Philippines</option>
            <option value="PN">Pitcairn</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="PR">Puerto Rico</option>
            <option value="QA">Qatar</option>
            <option value="RE">Reunion</option>
            <option value="RO">Romania</option>
            <option value="RU">Russian Federation</option>
            <option value="RW">Rwanda</option>
            <option value="BL">Saint Barthelemy</option>
            <option value="SH">Saint Helena</option>
            <option value="KN">Saint Kitts and Nevis</option>
            <option value="LC">Saint Lucia</option>
            <option value="MF">Saint Martin</option>
            <option value="PM">Saint Pierre and Miquelon</option>
            <option value="VC">Saint Vincent and the Grenadines</option>
            <option value="WS">Samoa</option>
            <option value="SM">San Marino</option>
            <option value="ST">Sao Tome and Principe</option>
            <option value="SA">Saudi Arabia</option>
            <option value="SN">Senegal</option>
            <option value="RS">Serbia</option>
            <option value="CS">Serbia and Montenegro</option>
            <option value="SC">Seychelles</option>
            <option value="SL">Sierra Leone</option>
            <option value="SG">Singapore</option>
            <option value="SX">Sint Maarten</option>
            <option value="SK">Slovakia</option>
            <option value="SI">Slovenia</option>
            <option value="SB">Solomon Islands</option>
            <option value="SO">Somalia</option>
            <option value="ZA">South Africa</option>
            <option value="GS">
              South Georgia and the South Sandwich Islands
            </option>
            <option value="SS">South Sudan</option>
            <option value="ES">Spain</option>
            <option value="LK">Sri Lanka</option>
            <option value="SD">Sudan</option>
            <option value="SR">Suriname</option>
            <option value="SJ">Svalbard and Jan Mayen</option>
            <option value="SZ">Swaziland</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
            <option value="SY">Syrian Arab Republic</option>
            <option value="TW">Taiwan, Province of China</option>
            <option value="TJ">Tajikistan</option>
            <option value="TZ">Tanzania, United Republic of</option>
            <option value="TH">Thailand</option>
            <option value="TL">Timor-Leste</option>
            <option value="TG">Togo</option>
            <option value="TK">Tokelau</option>
            <option value="TO">Tonga</option>
            <option value="TT">Trinidad and Tobago</option>
            <option value="TN">Tunisia</option>
            <option value="TR">Turkey</option>
            <option value="TM">Turkmenistan</option>
            <option value="TC">Turks and Caicos Islands</option>
            <option value="TV">Tuvalu</option>
            <option value="UG">Uganda</option>
            <option value="UA">Ukraine</option>
            <option value="AE">United Arab Emirates</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States</option>
            <option value="UM">United States Minor Outlying Islands</option>
            <option value="UY">Uruguay</option>
            <option value="UZ">Uzbekistan</option>
            <option value="VU">Vanuatu</option>
            <option value="VE">Venezuela</option>
            <option value="VN">Viet Nam</option>
            <option value="VG">Virgin Islands, British</option>
            <option value="VI">Virgin Islands, U.s.</option>
            <option value="WF">Wallis and Futuna</option>
            <option value="EH">Western Sahara</option>
            <option value="YE">Yemen</option>
            <option value="ZM">Zambia</option>
            <option value="ZW">Zimbabwe</option>
          </select>


          <br /> <br />
          <label htmlFor="street" 
          className='text-gray-900 leading-6 text-sm font-medium'>Street Address</label> <br />

          <input 
          onChange={changeHandler} value={formData.street}
          type="text" placeholder="41 hirrwah, Waidhan" id="street" name='street'
          className='w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal' />
          <br /> <br />


          <label htmlFor="city" 
          className='text-gray-900 leading-6 text-sm font-medium'>City</label> <br />

          <input 
          onChange={changeHandler} value={formData.city}
          type="text" placeholder="Singrouli" id="city" name='city'
          className='w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal' />
          <br/> <br/>


          <label htmlFor="state" 
          className='text-gray-900 leading-6 text-sm font-medium'>State / Province</label> <br />

          <input 
          onChange={changeHandler} value={formData.state}
          type="text" placeholder="Madhya Pradesh" id="state" name='state'
          className='w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal' /> 
          <br/> <br/>


          <label htmlFor="postalCode" 
          className='text-gray-900 leading-6 text-sm font-medium'>ZIP / Postal code</label> <br />

          <input 
          onChange={changeHandler} value={formData.postalCode}
          type="number" placeholder="486886" id="postalCode" name='postalCode'
          className='w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal' />
          <br/> <br/>


          <label className='text-gray-900 leading-6 text-sm font-medium'>By Email</label> <br/>

          <input  
          checked={formData.comments}  onChange={changeHandler}
          type="checkbox" name="comments" id="comments"
          className="h-4 w-4 mt-1 rounded"  /> 
          <label className='text-gray-900 leading-6 text-sm font-medium'> Comments</label> <br/>
            <p>Get notifed when someones post comments on a posting. </p>  


          <input
          onChange={changeHandler} checked={formData.candidates}
          type="checkbox" name="candidates" id="candidates"
          className="h-4 w-4 mt-1 rounded"  /> 
          <label className='text-gray-900 leading-6 text-sm font-medium'> Candidates</label> <br/>
           <p>Get notified when a Candidate applies for a job. </p>  


          <input 
          onChange={changeHandler} checked={formData.offers}
          type="checkbox" name="offers" id="offers"
          className="h-4 w-4 mt-1 rounded"  /> 
          <label className='text-gray-900 leading-6 text-sm font-medium'> Offers</label> <br/>
            <p>Get notified a Candidate accepts or rejects an offer. </p>  <br/>


          <label className='text-gray-900 leading-6 text-sm font-medium'> Push Notifiaction</label> <br/>
            <p>These are delivered by SMS to your mobile number </p>  

          <input
          onChange={changeHandler} value="Everything"
          type="radio" name="pushNotifications" id="pushEverything" />
          <label htmlFor='pushEverything' className='text-gray-900 leading-6 text-sm font-medium p-1'>Everything</label> <br/>

          <input 
          onChange={changeHandler} value="Same as email"
          type="radio" name="pushNotifications" id="pushEmail" />
          <label htmlFor='pushEmail' className='text-gray-900 leading-6 text-sm font-medium p-1'>Same as email</label> <br/>

          <input 
          onChange={changeHandler} value="No push notification"
          type='radio' name="pushNotifications" id="pushNothing" />
          <label htmlFor='pushNothing' className='text-gray-900 leading-6 text-sm font-medium p-1'>No push notifiaction</label>
  


          <br/> <br/>
          <button 
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Save</button>

        </form>

    </div>
  );

}

  // const [fistName, setFirstName] = useState("") ;
  // const [lastName, setLastName] = useState("") ;

  // console.log(fistName) ; 
  // console.log(lastName) ; 
  // function firstNameHandler(event){
    // console.log("Printing First Name")
    // console.log(event.target.value) ;
  //   setFirstName(event.target.value) ;
  // }

  // function lastNameHandler(event){
    // console.log("Printing Last Name")
    // console.log(event.target.value) ;
  //   setLastName(event.target.value) ;
  // }


  // const [formData, setFormData] = useState( {firstName:"", lastName:"", email:"", comments:"", isVisible:true , mode:"", favSub:""} ) ;

  // // console.log(formData) ;

  // function changeHandler(event){
  //   const {name, value, checked, type} = event.target 

  //   setFormData( prevFormData => {
  //     return {
  //       // ...prevFormData,  [event.target.name] : event.target.value 
  //       ...prevFormData, [name]: type === "checkbox" ? checked : value
  //     }
  //   }) ;
  // }

  // function submitHandler(event) {
  //   // send data
  //   event.preventDefault() ;
  //   console.log("Finally Printing entire form ka data ..... ")
  //   console.log(formData) ;
  // }

  // return (

  //   <div className="App">
  //     <h1>React Forms</h1>

  //     <form onSubmit={submitHandler}>

  //       <input 
  //       onChange={changeHandler}
  //       type='text' placeholder='Enter first name' 
  //       name="firstName" value={formData.firstName} />

  //       <br/> <br/> 

  //       <input 
  //       onChange={changeHandler}
  //       type='text' placeholder='Enter last name' 
  //       name="lastName" value={formData.lastName} />

  //       <br/> <br/> 

  //       <input 
  //       onChange={changeHandler}
  //       type='email' placeholder='Enter your Email here' 
  //       name='email' value={formData.email} />

  //     <br/> <br/> 

  //       <textarea
  //       onChange={changeHandler}
  //       placeholder='Enter your Comments here'
  //       name='comments' value={formData.comments} />

  //       <br/> <br/>

  //       <input
  //       onChange={changeHandler}
  //       type='checkbox' name="isVisible" id='isVisible'
  //       checked={formData.isVisible} />

  //       <label htmlFor='isVisible' >I'm Visible ? </label>

  //       <br/> <br/>

  //       {/* for grouping elements  */}
  //       <fieldset>  
  //         <legend>Mode :</legend>

  //         <input
  //           onChange={changeHandler}
  //           type='radio' name='mode' 
  //           value="Online-mode" id='Online-mode'
  //           checked={formData.mode === "Online-mode"} />

  //         <label htmlFor='Online-mode'>Online mode</label>

  //         <input
  //         onChange={changeHandler}
  //         type='radio' name='mode'
  //         value="Offline-mode" id="Offline-mode"
  //         checked={formData.mode === "Offline-mode"}  />

  //         <label htmlFor='Offline-mode'>Offline mode</label>

  //       </fieldset>

  //       <br/>

  //       <label htmlFor='favSub'>Tell me Your Favourite Subject  </label>
  //       <select
  //       onChange={changeHandler}
  //       name='favSub' id='favSub' value={formData.favSub}
  //       >
  //         <option value="cse" >CSE</option>
  //         <option value="it" >IT</option>
  //         <option value="mechanical" >Mechanical</option>
  //         <option value="civil" >Civil</option>
  //         <option value="electrical" >Electrical</option>
  //         <option value="ec" >EC</option>
  //         <option value="tks" >TKS</option>
  //         <option value="akv" >AKV</option>
  //       </select>

  //       <br/> <br/>

  //       <button>Submit</button>

  //     </form>

  //     <p> {formData.firstName} </p>

    // </div>
  // );
// }

export default App;
