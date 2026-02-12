---
title: 电子电路与系统基础（2）：（四）正反馈和负阻
top: 1
toc: true
recommend: 1
keywords: EEEC
date: 2024-12-4
---
## 运放正反馈

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241204193001.png)

这个实验做了很多，理解应该是比较深刻了的
正反馈存在解可能非唯一的问题。

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241204194029.png)

在蓝色虚线区工作是不稳定的，物理上无法测出该区域，所以测量得到的是滞回曲线

正反馈和负反馈同时添加（通过负反馈让电路呆在线性区）

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241204194534.png)

显然有1>F，负反馈占优，虚短虚断得到vOUT=0。
在线性区的时候，用加流求压求端口电阻得到负电阻（不能用加压求流）

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241204195054.png)

有一定的约束

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241204195554.png)

在饱和区的时候

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241204195621.png)

同样加流求压，能够得到限制条件，以及电路抽象为戴维南源

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241204195828.png)

看输入输出电压关系，每个电流都有唯一对应电压，认为是流控器件，测量的时候只能加测试电流。这里负反馈大于正反馈

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241204195958.png)

加压的时候正反馈大于负反馈，运放呆不在线性区，

