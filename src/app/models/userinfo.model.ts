export class Userinfo {
    constructor(
      public name: string,
      public location: string,
      public avatar_url: string,
      public bio: string,
      public twitter_username: string,
      public html_url: string,
      public public_repos: number
    ) {}
  }