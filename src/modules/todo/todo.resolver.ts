import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import Todo from 'src/models/todo.entity';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {
  constructor(@Inject(TodoService) private todoService: TodoService) {}

  @Query(() => Todo)
  async todo(@Args('id') id: number): Promise<Todo> {
    return await this.todoService.getDetailTodo(id);
  }

  @Mutation(() => Todo)
  async createTodo(
    @Args('shortDesc') shortDesc: string,
    @Args('longDesc') longDesc: string,
  ): Promise<Todo> {
    return await this.todoService.createOneTodo({ shortDesc, longDesc });
  }
}
