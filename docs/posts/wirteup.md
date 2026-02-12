---
title: THUCTF 2023 部分 Writeup
top: 1
toc: true
recommend: 1 
keywords: CTF
date: 2023-10-20
---
# THUCTF 2023 Writeup
Zirno_81 也许有 copyright
## 一道难题
base64 一眼顶针，下一个

## easymaze
用 16 进制读取发现 IEND 数据块后面还有数据，Google 文件尾得知是倒着的 zip 头，于是乎提取出来做倒置得到压缩包（但是得到的压缩包有点损坏直接 WINRAR 修复了）。解压得到一个 linux 可执行文件，先拖进 16 进制读取器里面，得到了 flag1 的明文。
![](https://pic.imgdb.cn/item/65324fe7c458853aefa80a8d.png)
然后才学会用 IDA 逆向，于是乎 shift+F12 找到了奇怪的字符串，结合反编译伪代码猜测是一个迷宫，手动换行得到迷宫图
![](https://pic.imgdb.cn/item/65324fe7c458853aefa80b69.png)
flag2 is THUCTF{wwdwwdddsssssd}
![](https://pic.imgdb.cn/item/65324fe7c458853aefa80ac8.png)

## 麦恩·库拉夫特 - 1
实际上可以 /gamemode spectator 然后发现正确路径直接冲就完事了
![](https://pic.imgdb.cn/item/65324ff9c458853aefa84e8e.png)

## 关注 THUCTF 谢谢喵
关注**紫荆园食堂红色圆圈炒宫爆八十一**谢谢喵

## KFC
旁边那家店卖 taco，结合一下店名搜到疑似全世界唯一的这家店，于是直接结束
![](https://pic.imgdb.cn/item/65324ff5c458853aefa83f16.png)
~~怎么这都要给图啊~~

## 简单的基本功
出题组是不是第一次给的压缩包有问题，我第一次获得的是一个 1kb 不到的压缩包就很呃呃
出了提示回来看这个题，重新下的压缩包又正常了，于是乎 Google 文件名 + 字节数得到了这个包发布的大概日期，于是乎直接翻官网找到明文文件，然后用 bkcrack 破解提取，得到 flag
![](https://pic.imgdb.cn/item/65324ff5c458853aefa83fe0.png)
以及某位特殊嘉宾
![](https://pic.imgdb.cn/item/65324ff5c458853aefa840b7.png)

## 深奥的基本功
读 16 进制发现 pcapng 包在偏移位 5 还是 6 有长达十七八个字节的相同数据。
继续 bkcrack
![](https://pic.imgdb.cn/item/65324ff5c458853aefa84188.png)

## easycrypto
你说得对，但是第一问就是纯单表替换而且还知道 THUCTF 和密文的对应关系，于是乎拿到 flag1 和 table，而且 table 大小写之间相同，可以锁定 table 上最后没有确定位置的三个字符
gettable.py 代码
``````python
if __name__ == '__main__':
    with open("./message.txt","r")as f:
        message = f.readline().strip()

    newtable = ""
    already_get = []
    with open("./cipher.txt","r")as f:
        cipher = f.readline().strip()
        for item in table:
            if (ord(item)>=ord("A")and ord(item)<=ord("Z")) or (ord(item)>=ord("a")and ord(item)<=ord("z")):
                if item in message:
                    index = message.index(item)
                    newtable += cipher[index]
                else:
                    newtable += "{"
                    newtable += item
                    newtable += "}" #用来标记不确定的字符
        newtable += "0123456789+/"
                    

    with open("./table.txt","w")as g:
        g.write(newtable)
``````
![](https://pic.imgdb.cn/item/65324fe6c458853aefa80a28.png)
读代码发现程序读 table 只读一行，遂推测 table 下面一行是 flag，用已经得到的 table 加换行 THUCTF 跑 ./main 发现与所需内容极其相似。于是乎挨个试验三个字符的所在位置，发现规律疑似单表替换，那么密文就是单表替换后的 base64：VEhVQ1RGe0lfMTB1M182YWMzYjR9，尝试替换后得到 flag
decoder.py （无法确定最后两个字符所以两种表都试了一遍，最后发现好像没啥影响）
```python
table1 ="RNPYCLDGBEKQSJZUVMWAITHFXOrnpycldgbekqsjzuvmwaithfxo0123456789+/"
table2 ="RNPYCLDGBEKQSJZUVMWAITFHXOrnpycldgbekqsjzuvmwaitfhxo0123456789+/"
table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
if __name__ == '__main__':
    cipher = "TCgTV1MDc0qlSAN1S182XHSoXeM9RR"

    message1 = ""
    message2 = ""
    already_get = []

    for item in cipher:
        if (ord(item)>=ord("A")and ord(item)<=ord("Z")) or (ord(item)>=ord("a")and ord(item)<=ord("z")):
            if item in table1:
                index = table1.index(item)
                message1 += table[index]
        else:
            message1 += item
            
        if (ord(item)>=ord("A")and ord(item)<=ord("Z")) or (ord(item)>=ord("a")and ord(item)<=ord("z")):
            if item in table2:
                index = table2.index(item)
                message2 += table[index]
        else:
            message2 += item

                    
print(message1)
print(message2)
```

## 测测你的网猫
实际上我用的是 socat 捏

## 汉化绿色版免费普通下载
拆包
![](https://pic.imgdb.cn/item/65324ff5c458853aefa83f9d.png)

## Z 公司的服务器
实际上我是 Google socat 上去的乱码知道的是 rz，不过实际上也可以通过 socat 导出日志来得知是 rz 
![](https://pic.imgdb.cn/item/65324fe6c458853aefa80939.png)
flag 为 THUCTF{Anc1ent_tr4nsf3r_pr0tOcoI_15_57111_In_u5e_t0d4y}

## Summary
我太菜了，鉴定为到此一游