interface Iuser {
  name: string;
  age: number;
  gender?: string | undefined;
}

const fn = {
  add: (num1: number, num2: number): number => num1 + num2,
  makeUser: (name: string, age: number, gender: string): Iuser => {
    return {
      name,
      age,
      gender,
    };
  },
  throwError: () => {
    throw new Error('xx');
  },
  getName: () => {
    const name = 'Jane';
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(name);
      }, 2000);
    });
  },
};

export default fn;
