# ETCD 之 FE-Feature 配置
#### 这个配置是干啥用的
前端可以读取这个配置，开启或者关闭指定功能

#### 配置示例
```
cloud_app:
  - 3Lx9y9nQv5U
  - 3NqKJsMWNQG
  - 3P7iFTBfQEC
  - 3P6Y22YCyz7
  - 3UyNgnY6iSy
  - 3UHTnEQEyZE
  - 3UeaNMx8U3m
  - 3TwcmuWPjd9
  - user_field: project_id
    data:
      - 3YkwKaq8ARE
      - 3YkwKaq8ARE
      - 3YksBmkcBnJ
      - 3Yks1nyGUMw
      - 3YkrXf1bS7d
      - 3YkiVyjRHTE
      - 3YkhDXticbY
      - 3YkhAo1XG3m
      - 3YkhxxdfwA5
      - 3YkhcMD2tPW
      - 3YkgF8H7Lr7
  - user_field: ysid
    data:
      - 3UyNgnY6iSy
```

这是一个cloud_app字段的配置示例
 - 可以接受单行的ysid，此id只匹配用户id
 - 可以接受object，user_field的值是 ysid | company_id | project_id | account_id, 此时data中是对应字段的id列表，匹配对应字段id

 btw，这是白名单配置，即命中则会在前端开启权限