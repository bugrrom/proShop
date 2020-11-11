export class apiFetch {
  private url: any;
  private token: string | undefined;
  private data: any | undefined;

  constructor(token?: string, data?: any) {
    this.token = token;
    this.data = data;
    this.url = "http://localhost:4000/";
  }

  getUrl() {
    return this.url;
  }

  getConfigAuth(token: string) {
    return {
      method: "GET",
      headers: {
        Authorization: `Basic ${token}`,
      },
    };
  }

  putConfigAuth(token: string, data: any) {
    return {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
      body: JSON.stringify(data),
    };
  }

  postConfigAuth(token: string, data: any) {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
      body: JSON.stringify(data),
    };
  }

  deleteConfigAuth(token: string, data: any) {
    return {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
      body: JSON.stringify(data),
    };
  }

  async get(url: string) {
    try {
      if (this.token) {
        const data = await fetch(
          `${this.getUrl()}${url}`,
          this.getConfigAuth(this.token)
        );
        return data;
      }
      const data = await fetch(`${this.getUrl()}${url}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async post(url: string) {
    try {
      if (this.token) {
        const data = await fetch(
          `${this.getUrl()}${url}`,
          this.postConfigAuth(this.token, this.data)
        );
        return data;
      }
      const data = await fetch(`${this.getUrl()}${url}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async put(url: string) {
    try {
      if (this.token) {
        const data = await fetch(
          `${this.getUrl()}${url}`,
          this.putConfigAuth(this.token, this.data)
        );
        return data;
      }
      const data = await fetch(`${this.getUrl()}${url}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async delete(url: string) {
    try {
      if (this.token) {
        const data = await fetch(
          `${this.getUrl()}${url}`,
          this.deleteConfigAuth(this.token, this.data)
        );
        return data;
      }
      const data = await fetch(`${this.getUrl()}${url}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
