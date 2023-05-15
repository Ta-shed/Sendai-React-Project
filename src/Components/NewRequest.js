
const NewRequest = () => {
    return(
<div>
<form>
 
  <div>

  <div>
    <label>From</label>
    <select name="location" id="location">
      <option value="uk">UK</option>
      <option value="usa">USA</option>
      </select>
</div>

<div>
    <label>Send To</label>
    <select name="destination" id="destination">
      <option value="South Africa">South Africa</option>
      <option value="Zimbabwe">Zimbabwe</option>
      </select>
</div>

<div>
    <label>Delivery Method</label>
    <select name="method" id="method">
      <option value="cash">Cash</option>
      <option value="mobile">Mobile Money</option>
      </select>
</div>

<div>
    <label>You Send</label>
    <input type="number" min={10} value={0}></input>
</div>

<div>
    <label>The receiver gets</label>
    <input type="number" value={0}></input>
</div>



  </div>

</form>

</div>

    )
}
export default NewRequest;