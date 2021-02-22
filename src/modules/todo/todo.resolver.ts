import { Resolver, Query, Args } from '@nestjs/graphql';
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
}
