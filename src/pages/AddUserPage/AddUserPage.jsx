import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from 'redux/users/users-operations';

const AddUserPage = () => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'avatar':
        setAvatar(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      avatar,
      name,
      phone,
      email,
      address,
    };
    dispatch(addUser(newUser));
    navigate('/users');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Avatar link
        <input
          onChange={onChangeInput}
          name="avatar"
          value={avatar}
          type="url"
        />
      </label>
      <label>
        Name
        <input onChange={onChangeInput} name="name" value={name} type="text" />
      </label>
      <label>
        Phone
        <input
          onChange={onChangeInput}
          name="phone"
          value={phone}
          type="number"
        />
      </label>
      <label>
        Email
        <input
          onChange={onChangeInput}
          name="email"
          value={email}
          type="email"
        />
      </label>
      <label>
        Address
        <input
          onChange={onChangeInput}
          name="address"
          value={address}
          type="text"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
export default AddUserPage;
