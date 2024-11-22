export interface Projects {
  id: number;
  image?: string;
  name: string;
  description: string;
  techs: string[];
  repo: string;
  deploy?: string;
}
