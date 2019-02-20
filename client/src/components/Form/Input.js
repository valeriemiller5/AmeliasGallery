import React from "react";
import "./Input.css";

export const Input = props => (
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label id="label" for="inputEmail4">Name</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="John Doe" />
    </div>
    <div class="form-group col-md-6">
      <label id="label" for="inputPassword4">Email</label>
      <input type="email" class="form-control" id="inputPassword4" placeholder="john@email.com" />
    </div>
  </div>
  <div class="form-group">
    <label id="label" for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label id="label" for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" />
    </div>
    <div class="form-group col-md-4">
      <label id="label" for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Alabama - AL</option>
        <option>Alaska - AK</option>
        <option>Arizona - AZ</option>
        <option>Arkansas - AR</option>
        <option>California - CA</option>
        <option>Colorado - CO</option>
        <option>Connecticut - CT</option>
        <option>Delaware - DE</option>
        <option>Florida - FL</option>
        <option>Georgia - GA</option>
        <option>Hawaii - HI</option>
        <option>Idaho - ID</option>
        <option>Illinois - IL</option>
        <option>Indiana - IN</option>
        <option>Iowa - IA</option>
        <option>Kansas - KS</option>
        <option>Kentucky - KY</option>
        <option>Louisiana - LA</option>
        <option>Maine - ME</option>
        <option>Maryland - MD</option>
        <option>Massachusetts - MA</option>
        <option>Michigan - MI</option>
        <option>Minnesota - MN</option>
        <option>Mississippi - MS</option>
        <option>Missouri - MO</option>
        <option>Montana - MT</option>
        <option>Nebraska - NE</option>
        <option>Nevada - NV</option>
        <option>New Hampshire - NH</option>
        <option>New Jersey - NJ</option>
        <option>New Mexico - NM</option>
        <option>New York - NY</option>
        <option>North Carolina - NC</option>
        <option>North Dakota - ND</option>
        <option>Ohio - OH</option>
        <option>Oklahoma - OK</option>
        <option>Oregon - OR</option>
        <option>Pennsylvania - PA</option>
        <option>Rhode Island - RI</option>
        <option>South Carolina - SC</option>
        <option>South Dakota - SD</option>
        <option>Tennessee - TN</option>
        <option>Texas - TX</option>
        <option>Utah - UT</option>
        <option>Vermont - VT</option>
        <option>Virginia - VA</option>
        <option>Washington - WA</option>
        <option>West Virginia - WV</option>
        <option>Wisconsin - WI</option>
        <option>Wyoming - WY</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label id="label" for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip" />
    </div>
  </div>
  <div class="form-group">
    <label id="label" for="inputAddress2">Message</label>
    <textarea type="text" class="form-control" id="inputAddress2" placeholder="Start Message Here..." />
  </div>
  <button type="submit" class="btn btn-secondary submit">Submit</button>
</form>
);
