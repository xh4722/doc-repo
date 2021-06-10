统一的验证工具集

### validatePwd

**(param:string) => boolean**

验证密码格式合法性

```tsx repl=true
// /^(?![A-Za-z]+$)(?!\d+$)\S{8,16}$/
validatePwd('123456')
```

### validateFilename

**(param:string) => boolean | string**

验证文件名格式合法性

```tsx
// 1. 文件名不能为空
// 2. /^[^\\/,;'`"]+$/
// 3. 长度不能超过 255 个字节
validateFilename('/name')
```

### validatePhone

**(param:string) => boolean**

验证手机号格式是否正确

```tsx
// /^1\d{10}$/
validatePhone('18300800303')
```

### validateEmail

**(param:string) => boolean**

验证 email 是否正确

```tsx repl=true
// /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
validateEmail('test@qq.com')
```

### validateUrl

**(param:string) => boolean**

验证 url 格式是否正确

```tsx
// /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
validateUrl('https://www.baidu.com')
```

### validateName

**(param:string) => boolean | string**

验证姓名格式是否正确

```tsx
// 1. 姓名不能为空
// 2. 姓名只能包含中文、英文、空格和 , . ' -
validateName('天线宝宝')
```

### validateIdcard

**(param:string) => boolean**

验证中国身份证号码格式是否正确

```tsx
// /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
validateIdcard('330727199905326745')
```

### validateIpv4

**(param:string) => boolean**

验证 ipv4 格式是否正确

```tsx
validateIpv4('192.168.0.1')
```

### validateIpv6

**(param:string) => boolean**

验证 ipv6 格式是否正确

```tsx
validateIpv6('1:2:3:4:5:6:7:8')
```
