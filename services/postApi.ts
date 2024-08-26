export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  
const baseUrl = 'https://jsonplaceholder.typicode.com'

export class PostApi{
    private baseUrl: string;
    constructor() {
      this.baseUrl = baseUrl;
    }
    private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const updatedOptions: RequestInit = {
          ...options,
          headers: {
              'Content-Type': 'application/json',
              ...(options?.headers || {})
          }
      };
        const response = await fetch(`${this.baseUrl}${endpoint}`, updatedOptions)
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      }
      public getPosts(): Promise<Post[]> {
        return this.request<Post[]>('/posts');
      }
      public getPost(id: number): Promise<Post> {
        return this.request<Post>(`/posts/${id}`);
      }
      public createPost(post: Omit<Post, 'id'>): Promise<Post> {
        return this.request<Post>('/posts', {
          method: 'POST',
          body: JSON.stringify(post),
        });
      }
      public updatePost(id: number, post: Omit<Post, 'id'>): Promise<Post> {
        
        return this.request<Post>(`/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify(post),
        });
      }
      public patchPost(id: number, partialPost: Partial<Omit<Post, 'id'>>): Promise<Post> {
        return this.request<Post>(`/posts/${id}`, {
          method: 'PATCH',
          body: JSON.stringify(partialPost),
        });
      }
      public deletePost(id: number): Promise<void> {
        return this.request<void>(`/posts/${id}`, {
          method: 'DELETE',
        });
      }
}