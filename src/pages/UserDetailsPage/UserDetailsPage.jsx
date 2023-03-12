import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrent } from 'redux/users/users-selectors';
import { getUserById } from 'redux/users/users-operations';
import { deleteUser } from 'redux/users/users-operations';

const UserDetailsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectCurrent);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  const onDeleteUser = id => {
    dispatch(deleteUser(id));
    navigate('/users');
  };

  return (
    <>
      {user && (
        <div>
          <img src={user.avatar} alt={user.name} />
          <p>{user.name}</p>
          <p>{user.phone}</p>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <button onClick={() => onDeleteUser(id)} type="button">
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default UserDetailsPage;
