function createID(): string {
    const randomNumber = Math.random() * 7;
    const randomString = String(randomNumber);
    const ID = randomString.slice(2, randomString.length);

    return ID;
}

export default createID;