---
title: 电子电路与系统基础（2）：（三）负反馈网络
top: 1
toc: true
recommend: 1 
keywords: EEEC
date: 2024-11-27
---
## 以非理想小信号放大器为例

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127193634.png?token=AN5NJZU2UIQZEEAKMHDQTATHI4CIC)

输入输出端口负载和原来抽象出来的电阻复合了，$R_{E}$在强大的$-g_{m}r_{in}r_{out}$面前基本上可以忽略不计，稍微改写一下就变成

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127194148.png?token=AN5NJZRU7YIV7VALRZOA77LHI4C3W)

现在我们来看看什么时候负反馈放大器能够被看作单向网络

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127194349.png?token=AN5NJZVHKBBJKGP4MJ4UU4DHI4DDI)

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127194356.png?token=AN5NJZWXCCBJXCVA45YPIMDHI4DDW)

这里单向网络传递函数的的解释比较基础，重述一遍就是：
信号源先因为内阻和$y_{11}$被分压，然后由本征跨导增益变为$-i_{2}$电流，最后由$y_{22}$和负载的电阻作用变为电压，从右到左对应乘上去的项

单向化条件已经得到了，拆分一下就是

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127194921.png?token=AN5NJZUQN7VQTNYH7TXGPDLHI4DYA)

然后glgg在这里举例做了一堆计算，反之就是说xx条件满足上面说的单向化条件，这里有一个比较重要的二级结论是

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127195143.png?token=AN5NJZRGOYAOF7ZCYKWGVWTHI4EA2)

$r_{outf}$稍微误差大一点，不过对于平时接的小电阻来说差不多。

但是这降低了增益

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127195749.png?token=AN5NJZTZLDGUKSZBWXWNMFTHI4EXY)

这里也有重要的估算结论，反之多记一下（记不住啊）

想要提高增益就需要采取折中方案，用旁路电容降低交流负反馈电阻

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127200219.png?token=AN5NJZWN25CGUJYJ2T6AFRDHI4FIW)

负反馈减弱反映在对增益估算的误差增大上

我们可以把负反馈的结论推广到以其他形式连接的反馈网络上，其中会有

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127202207.png?token=AN5NJZRFBL26HUEHPMKTM3THI4HS2)

分析流程如下

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127202224.png?token=AN5NJZVW7MNP72HLIMFG6E3HI4HUE)

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127202241.png?token=AN5NJZXNYEX3K73FYV6HYPDHI4HVA)

通用性的结论如下

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127202519.png?token=AN5NJZSXRPQAW7ZBFCL7RRTHI4H7A)


由于公共地的存在，有口诀：是一个点是并联，不是一个点就是串联

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127202315.png?token=AN5NJZW7IBSKYYAYDXIXAFDHI4HXG)

用运放举例就是

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127202635.png?token=AN5NJZUJZSPRCL77APJYCK3HI4IDU)

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127202735.png?token=AN5NJZXMZXFWG54WFF4PYILHI4IHO)

简化电路，在输出端加测试电压，输入端短路测电流

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127202853.png?token=AN5NJZWI3QBMJGT3WR55PNLHI4IMI)

得到了结论

求输入输出阻抗的话，纯数学流程是这样的：

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127203108.png?token=AN5NJZRJMOD4I35BLFKQRGTHI4IUU)

先分别求两个网络的$y$参量，然后并并连接$y$相加，再求逆

但是如果$y_{12}=0$，求逆会出大问题，~~（g了）~~
所以要想办法用电路的方式来分析

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127204435.png?token=AN5NJZRGJ7KUDA753CBUS63HI4KHE)

单独来研究开环放大器

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127204556.png?token=AN5NJZRE7CHHHF3HZUHK2GDHI4KMG)

经典口诀：放大网络画一遍，反馈网络画两遍。

所以对于前面的运放反馈网络，变成下面这样

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127204808.png?token=AN5NJZTNS73NTCDFNFPRFE3HI4KUM)

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127204814.png?token=AN5NJZQ5LJKY7U3Q5JDXUWLHI4KUY)

然后我们就可以来看开环放大器的阻抗了

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127205128.png?token=AN5NJZQTZICR2IKTX6IEWLDHI4LA6)

然后把它搞成闭环

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127205251.png?token=AN5NJZRBS2CIKQPX2U4ADMTHI4LGE)

![image.png](https://raw.githubusercontent.com/konpoku/pic-bed/main/pics/20241127205413.png?token=AN5NJZQDO7ZE62DYLBISG5THI4LLI)

先求出开环放大器的网络参量，直接除以$(1+T)$就是闭环放大器的网络参量

