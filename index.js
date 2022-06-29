// Write your solution in this file!
const employee = {
    name: "Kyle",
    street: "Shire",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Kim"
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

function deleteFromEmployeeByKey(obj, key, value) {
    const homelessEmployee = { ...obj };

    homelessEmployee[key] = value;

    delete homelessEmployee.key;

    return homelessEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value;

    delete obj.key

    return obj;
}
