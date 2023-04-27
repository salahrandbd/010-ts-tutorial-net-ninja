// type aliases
type StringOrNum = string|number;
type ObjectWithName = { name: string, uuid: StringOrNum };

let getUser = (uuid: StringOrNum): ObjectWithName => {
  return { name: 'Salah', uuid };
}