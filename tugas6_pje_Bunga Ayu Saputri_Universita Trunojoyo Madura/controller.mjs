import users from "./data.mjs";

const index = () => {
    return users;
};

const store = (user) => {
    users.push(user);
};

const destroy = (index) => {
    users.splice(index, 1);
};

export { index, store, destroy };
