import { Component } from 'react';

export default class Api extends Component {

  static returnApiUrl(env) {
      return 'http://www.mocky.io'
  }

  static setAuthorizationToken() {
    const header = new Headers({
      'content-type': 'application/json'
    });
    // Authorization Token can be appended here
    return header;
  }

  static get(url) {
    return this.apiCall(url, null, 'GET');
  }

  static apiCall(url, params, method) {
    const host = this.returnApiUrl(process.env.NODE_ENV);
    const fullUrl = `${host}${url}`;
    return fetch(fullUrl, {
      method: method,
      headers: this.setAuthorizationToken(),
      body: params 
    });
  }
}

