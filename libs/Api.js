class Rest {
  path;
  accessToken;

  constructor() {
    this.path = null;
    this.accessToken = null;
  }

  configure({path, accessToken}) {
    this.path = path;
    this.accessToken = accessToken;
  }

  async get(id) {
    const options = this.createOptions({
      method: 'GET',
    });

    const response = await fetch(`${this.path}/${id}`, options);
    return response.json();
  }

  async find(params) {
    const options = this.createOptions({method: 'GET'});
    let args = params ? '?' + new URLSearchParams(params).toString() : '';

    const response = await fetch(`${this.path}/${args}`, options);
    return response.json();
  }

  async create(data) {
    const options = this.createOptions({
      method: 'POST',
      data,
    });

    const response = await fetch(`${this.path}`, options);
    return response.json();
  }

  async update(id, data) {
    this._clean(data);

    const options = this.createOptions({
      method: 'PUT',
      data,
    });

    const response = await fetch(`${this.path}/${id}`, options);
    return response.json();
  }

  async patch(id, data) {
    this._clean(data);

    const options = this.createOptions({
      method: 'PATCH',
      data,
    });

    const response = await fetch(`${this.path}/${id}`, options);
    return response.json();
  }

  async remove(id) {
    const options = this.createOptions({
      method: 'DELETE',
    });

    let path = id ? `${this.path}/${id}` : this.path;

    const response = await fetch(path, options);
    return response.json();
  }

  _clean(obj) {
    Object.keys(obj).forEach(key => {
      if (obj[key] === undefined || obj[key] === null) {
        delete obj[key];
      }
    });
  }

  createOptions({method, data, accessToken}) {
    const options = {
      method: method,
      headers: {'Content-Type': 'application/json; charset=utf-8'},
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    if (this.accessToken) {
      options.headers.Authorization = `Bearer ${this.accessToken}`;
    }

    return options;
  }
}

export default class API {
  apiUrl;
  storage;
  accessToken;
  user;

  constructor() {
    this.apiUrl = null;
    this.storage = null;
    this.accessToken = null;
    this.user = null;
    this.rest = new Rest();
  }

  configure({storage, apiUrl}) {
    this.storage = storage;
    this.apiUrl = apiUrl;
  }

  service(service) {
    this.service = service;
    this.path = `${this.apiUrl}/${service}`;
    this.rest.configure({
      path: this.path,
      accessToken: this.accessToken,
    });
    return this.rest;
  }

  async authenticate(data) {
    this.path = `${this.apiUrl}/authentication`;

    this.rest.configure({path: this.path});
    const result = await this.rest.create(data);
    console.log(result);
    this.accessToken = result.accessToken;
    this.user = result.user;

    await this.storage.setItem('jwt', this.accessToken);

    return result;
  }

  async reAuthenticate() {
    this.path = `${this.apiUrl}/authentication`;
    const accessToken = await this.storage.getItem('jwt');

    const data = {
      strategy: 'jwt',
      accessToken: accessToken,
    };
    this.rest.configure({path: this.path, accessToken: this.accessToken});
    const result = await this.rest.create(data);
    return result;
  }

  async logout() {
    this.path = `${this.apiUrl}/authentication`;
    const accessToken = await this.storage.getItem('jwt');

    this.rest.configure({path: this.path, accessToken: this.accessToken});
    const result = await this.rest.remove();
    return result;
  }
}
