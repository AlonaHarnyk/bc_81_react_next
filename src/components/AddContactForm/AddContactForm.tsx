export default function AddContactForm() {
  return (
    <form action="">
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        City
        <input type="text" name="city" />
      </label>
      <label>
        Job
        <input type="text" name="job" />
      </label>
      <label>
        Number
        <input type="text" name="number" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>

      <fieldset>
        <legend>Has work</legend>
        <label>
          <input type="radio" name="hasWork" value="true" />
          Yes
        </label>
        <label>
          <input type="radio" name="hasWork" value="false" />
          No
        </label>
      </fieldset>

      <label>
        Sex
        <select name="sex">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      <fieldset>
        <legend>Select hobbies</legend>
        <label>
          <input type="checkbox" name="hobbies" value="swimming" />
          Swimming
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="dancing" />
          Dancing
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="football" />
          Football
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="music" />
          Music
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="horseRiding" />
          Horse Riding
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="hiking" />
          Hiking
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="sleeping" />
          Sleeping
        </label>
      </fieldset>

      <label>
        Description
        <textarea name="description" rows={4}></textarea>
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
}
