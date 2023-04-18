import { AvForm, AvField } from 'availity-reactstrap-validation';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slider-modal';
import Select from 'react-select';
import { Label, Button, Modal } from 'reactstrap';
import { getAffiliatesUser, getAffiliatesUsers, getAffliliates, userRefreshToken } from '../../../store/actions';
import { get, put } from '../../../helpers/api_helper';
import { useDispatch, useSelector } from 'react-redux';

const RoleGroup = [
  {
    options: [
      { label: 'Владелец', value: 2 },
      { label: 'Сервисный центр', value: 0 },
    ],
  },
];

const AdminAddUserForm = ({ setEditModal, editModal, id }) => {
  const [selectedAffiliate, setselectedAffiliate] = useState(null);
  const [selectedMulti, setselectedMulti] = useState(null);
  const [user, setUser] = useState({
    branch_id: 1,
    createdAt: '',
    description: null,
    id: 21,
    last_selected_branch_id: null,
    locale: '',
    login: '',
    name: '',
    role: 0,
    status: 1,
    uid: '',
    updatedAt: '',
  });
  const [AffiliateGroup, setAffiliateGroup] = useState([
    {
      options: [{ label: 'test', value: 1 }],
    },
  ]);

  const [checkStatus, setCheckStatus] = useState(false);

  const statusHandler = () => {
    if (checkStatus) {
      console.log('TRUE', checkStatus);
      setUser((prev) => ({ ...prev, status: 1 }));
    } else {
      console.log('FALSE', checkStatus);
      setUser((prev) => ({ ...prev, status: 0 }));
    }
  };

  useEffect(() => {
    statusHandler();
  }, [checkStatus]);

  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.Login);
  const allAffiliates = useSelector((state) => state.Affiliates);

  const { accessToken } = userSignin;
  const { affiliates } = allAffiliates;

  const handleSelectAffiliate = (selectedAffiliate) => {
    setselectedAffiliate(selectedAffiliate);
    setUser((prev) => ({ ...prev, branch_id: selectedAffiliate.value }));
  };

  const handleSelectRole = (selectedRole) => {
    setselectedMulti(selectedRole);
    setUser((prev) => ({ ...prev, role: selectedRole.value }));
  };

  const handleMulti = (selectedMulti) => {
    setselectedMulti(selectedMulti);
  };

  useEffect(async () => {
    const data = await get(`https://testdms.ml/api/dms/users/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(data);
    setUser({
      branch_id: data.branch_id,
      createdAt: data.createdAt,
      description: data.description,
      id: data.id,
      last_selected_branch_id: data.last_selected_branch_id,
      locale: data.locale,
      login: data.login,
      name: data.name,
      role: data.role,
      status: data.status,
      uid: data.uid,
      updatedAt: data.updatedAt,
    });
    console.log(user);
  }, [id]);

  useEffect(() => {
    // dispatch(userRefreshToken())
    if (accessToken) {
      dispatch(getAffliliates());
      console.log(affiliates);
      // setCheckfilial(affiliates[0].description)
    }
  }, []);

  useEffect(async () => {
    // dispatch(userRefreshToken())
    if (accessToken) {
      let options = affiliates.map((item) => {
        return {
          label: item.description,
          value: item.id,
        };
      });
      setAffiliateGroup([{ options }]);
    }
  }, [affiliates]);

  const updateUserHandler = async () => {
    const { id, login, password, name, branch_id, role, status, description } = user;
    try {
      const data = await put(
        'https://testdms.ml/api/dms/users/',
        { id, login, password, name, branch_id, role, status, description },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: '*/*',
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(data);
      dispatch(getAffiliatesUsers());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        isOpen={editModal}
        toggle={() => {
          setEditModal(!editModal);
        }}
        scrollable={true}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0">Редактировать пользователя</h5>
          <button
            type="button"
            onClick={() => setEditModal(false)}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="modal-body">
          <AvForm className="right-sidebar-modal-form">
            <div className="mb-3">
              <Label htmlFor="validationCustom01">Логин</Label>
              <AvField
                name="login"
                placeholder="Логин"
                type="text"
                errorMessage="Введите логин!"
                className="form-control"
                validate={{ required: { value: true } }}
                id="validationCustom01"
                value={user.login}
                onChange={(e) => setUser((prev) => ({ ...prev, login: e.target.value }))}
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="validationCustom02">Имя</Label>
              <AvField
                name="lastname"
                placeholder="Имя"
                type="text"
                errorMessage="Введите имя!"
                className="form-control"
                validate={{ required: { value: true } }}
                id="validationCustom02"
                value={user.name}
                onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}
              />
            </div>

            <div className="mb-3">
              <AvField
                className="mb-3"
                type="textarea"
                rows="3"
                label="Примечание"
                name="note"
                id="note"
                placeholder="Примечание"
                // errorMessage="Введите примечание!"
                validate={{
                  required: { value: false },
                  // pattern: {
                  //     value: "^[0-9a-zA-Z]+$",
                  //     errorMessage: "Only Alphanumeric",
                  // },
                }}
                value={user.description}
                onChange={(e) => setUser((prev) => ({ ...prev, description: e.target.value }))}
              />
            </div>

            <div className="mb-3">
              <Label htmlFor="validationCustom03">Филиал</Label>
              <Select
                value={selectedAffiliate}
                onChange={(e) => {
                  handleSelectAffiliate(e);
                }}
                options={AffiliateGroup}
                classNamePrefix="select1-selection"
              />
            </div>

            <div className="mb-3">
              <label className="control-label">Роль</label>
              <Select
                value={selectedMulti}
                onChange={(e) => {
                  handleSelectRole(e);
                }}
                options={RoleGroup}
                classNamePrefix="select2-selection"
              />
            </div>

            <div className="mb-3">
              <div className="form-check form-check-right mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="CustomCheck1"
                  onChange={() => setCheckStatus((prev) => !prev)}
                />
                <label className="form-check-label">Активный</label>
              </div>
            </div>

            <div className="mb-3">
              <Label htmlFor="validationCustom05">Пароль</Label>
              <AvField
                name="password"
                placeholder="Пароль"
                type="text"
                errorMessage="Введите пароль!"
                className="form-control"
                validate={{
                  required: { value: true },
                  pattern: {
                    value: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$',
                    errorMessage: 'Минимум 8 символов, должны быть цифры и буквы обоих регистров!',
                  },
                }}
                id="validationCustom05"
                value={user.paaword}
                onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
              />
            </div>
            <Button onClick={updateUserHandler} id="right-sidebar-submit-btn" color="link" type="submit">
              Сохранить
            </Button>
          </AvForm>
        </div>
      </Modal>
    </>
  );
};

export default AdminAddUserForm;
