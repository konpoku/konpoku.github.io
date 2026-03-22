---
title: 运维笔记
date: 2026-03-11
---
用这条blog记录一下运维配环境的时候遇到的各类逆天bug（持续更新）
## 26.03.12 转发代理localhost解析到ipv6导致服务不可用
服务器配环境的时候总需要将某些服务器流量转发到本地代理。本地端运行
```sh
ssh -fNR 7897:localhost:7897 user@server
```
服务端curl卡死，说明ssh隧道通了但本地接受到流量。问gemini说可能是因为在本地端localhost被解析到了ipv6地址[::1]，而本地代理没有监听ipv6地址，因此GG
```
debug1: client_input_channel_open: ctype forwarded-tcpip rchan 3 win 2097152 max 32768
debug1: client_request_forwarded_tcpip: listen localhost port 7897, originator 127.0.0.1 port 35458
debug1: connect_next: start for host localhost ([::1]:7897)
debug1: connect_next: connect host localhost ([::1]:7897) in progress, fd=9
debug1: channel 1: new forwarded-tcpip [127.0.0.1] (inactive timeout: 0)
debug1: confirm forwarded-tcpip
debug1: channel 1: connection failed: Connection refused
```
## 26.03.12 别手动配VLLM/SGLang/Verl/rllm/AReaL/等框架环境
md这些环境都不帮你装主要依赖的，能用docker尽量用docker，手动配还得自己下flash attention真是逆天

## 26.03.13 使用代理apt update的时候要使用sudo -E
参考[这个issue](https://github.com/NVIDIA/nvidia-docker/issues/1296#issuecomment-646521766c)，

## 26.03.13 docker 配置 nvidia runtime 遇到无法识别问题
参考[这个issue](https://github.com/Steam-Headless/docker-steam-headless/issues/117)

## 26.03.21 Verl: Profiling
是不会向指定的output dir输出的，非常邪门，需要到/tmp/ray/session_latest/logs/nsight/
记得general_profiler和actor/critic都要设置

## 26.03.22 Verl: AssertionError: The device mesh of a tensor should be a root mesh.
忘记删原有的checkpoint了，十分邪门！
