interface Location {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

interface LoginData {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface UserData {
  gender: "female" | "male";
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: Location;
  email: string;
  login: LoginData;
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface RandomUserResponse {
  results: UserData[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
