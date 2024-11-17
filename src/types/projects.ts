export interface Projects {
  id: number;
  name: string;
  description: string;
  techs: string[];
  repo: string;
  deploy?: string;
}
