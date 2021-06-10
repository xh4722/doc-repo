---
id: decorators
title: Decorators
---

## Swagger

用于快速生成 swagger 文档

### Example

```typescript
import { Swagger } from '@ys/api'
import { ApiModelProperty } from '@nestjs/swagger'

class PostDto {
  @ApiModelProperty()
  readonly msg: string
}

@Controller()
export class AppController {
  @Swagger({
    api: {
      title: 'test post swagger',
      description: 'test post swagger',
    },
    responses: [
      {
        status: 200,
        type: PostDto,
      },
    ],
    param: {
      name: 'id',
      description: 'unique id.',
    },
  })
  @Post('/:id')
  post(@Body() body: PostDto) {
    return body
  }
}
```
