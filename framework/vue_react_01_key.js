// 不带有key并且使用简单模板，基于这个前提可以更有效的复用节点.diff速度上来看也是不带key的更加快速,因为diff在增删节点上有耗时
// 没有key可以对节点就地复用

// 没有key的副作用: 可能不会产生过渡效果, 某些节点存在数据绑定状态,可能出现状态错位

// key的作用: key是给每个vnode的唯一id,可以依靠key,更准确,更快的拿到oldVnode中对应的vnode节点
// 避免就地复用(更加准确)
// 利用key的唯一性生成map对象来获取对应节点,比遍历方式更快 

