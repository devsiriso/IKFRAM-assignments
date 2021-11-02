import { useState } from 'react';
export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [biography, setBiography] = useState('');
  const [spamUser, setSpamUser] = useState(false);

  const countries = ['The Netherlands', 'Belgium', 'Luxembourg'];

  const submit = (event) => {
    event.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      country: country,
      email: email,
      biography: biography,
      spamUser: spamUser,
    };
    alert(`submitting: \n ${JSON.stringify(user)}`);
  };

  const handleSpam = () => {
    setSpamUser(!spamUser);
  };

  const styles = {
    inputGroup: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  };

  return (
    <div>
      <h1>Forms</h1>
      <h2>Registration form</h2>
      <form>
        <div>
          <div>
            <label>First name: </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Last name: </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Country: </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option />
              {countries.map((x, y) => (
                <option key={y}>{x}</option>
              ))}
            </select>
          </div>
          <div>
            <label>E-mail: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Biography: </label>
            <textarea
              value={biography}
              onChange={(e) => setBiography(e.target.value)}
            ></textarea>
          </div>
          <div>
            Send me spam:{' '}
            <input type="checkbox" checked={spamUser} onChange={handleSpam} />
          </div>
          <input type="submit" value="submit" onClick={submit} />
        </div>
      </form>

      <div>
        <h2>Reactivity</h2>
        <p>First name: {firstName}</p> <p>Last name: {lastName}</p> <p>Country: {country}</p> <p>E-mail: {email}</p> <p>Biography: {biography}</p>  Spam user: {spamUser.toString()}
      </div>
    </div>
  );
};
