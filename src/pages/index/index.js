import React, { PureComponent } from "react";
import { formatMessage, setLocale, getLocale } from "umi/locale";

class Index extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // setLocale()
  }
  render() {
    return (
      <>
        <p className="last-modified">
          {formatMessage({
            id: "lastModified",
            defaultMessage: "lastModified"
          })}
        </p>
        <a className="download-pdf" href="resume.pdf">
          {formatMessage({ id: "download", defaultMessage: "download" })} PDF
        </a>
        <main className="content">
          <header className="content-hd">
            {/* <section className="language">
              <button
                onClick={() => {
                  if (getLocale() === "zh-CN") {
                    setLocale("en-US");
                  } else {
                    setLocale("zh-CN");
                  }
                }}
                type="button"
                class="language-chose"
              >
                {formatMessage({
                  id: "switchTo",
                  defaultMessage: "change language"
                })}
              </button>
            </section> */}
            <section className="title">
              <div className="name">
                <h1>
                  {formatMessage({
                    id: "name",
                    defaultMessage: "name"
                  })}
                </h1>
              </div>
              <div className="job">
                <h2>
                  {formatMessage({
                    id: "job",
                    defaultMessage: "job"
                  })}
                </h2>
              </div>
            </section>
            <section className="info">
              <ul>
                <li>
                  {formatMessage({
                    id: "gender",
                    defaultMessage: "gender"
                  })}{" "}
                  / 1992.4
                </li>
                <li>
                  {formatMessage({
                    id: "masterSchool",
                    defaultMessage: "masterSchool"
                  })}
                  {"    "}/{"    "}
                  {formatMessage({
                    id: "masterMajor",
                    defaultMessage: "masterMajor"
                  })}
                </li>
                <li>
                  {" "}
                  {formatMessage({
                    id: "postgraduate",
                    defaultMessage: "postgraduate"
                  })}
                  {"   "}/{"   "}
                  {formatMessage({
                    id: "graduatedAt",
                    defaultMessage: "graduatedAt"
                  })}
                  {"   "}
                </li>
              </ul>
            </section>
            <section className="contact">
              <ul>
                <li>
                  <a target="_blank" href="https://linthan.github.io/blog">
                    <span className="contact-link">
                      {formatMessage({
                        id: "blog",
                        defaultMessage: "blog"
                      })}
                    </span>
                    <span className="iconfont">
                      <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                        <path d="M512 42.581333l-469.333333 469.333333 31.146667 31.146667L170.666667 446.250667l0 438.186667 682.666667 0L853.333333 446.208l96.853333 96.896 31.146667-31.146667L512 42.581333zM426.666667 841.770667l0-298.666667 170.666667 0 0 298.666667L426.666667 841.770667zM810.666667 841.770667l-170.666667 0 0-341.333333L384 500.437333l0 341.333333L213.333333 841.770667 213.333333 403.584l298.666667-298.666667 298.666667 298.666667L810.666667 841.770667z" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/linthan">
                    <span className="contact-link">
                      {formatMessage({
                        id: "github",
                        defaultMessage: "github"
                      })}
                    </span>
                    <span className="iconfont">
                      <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                        <path d="M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:445366464@qq.com">
                    <span className="contact-link">
                      {formatMessage({
                        id: "email",
                        defaultMessage: "email"
                      })}
                    </span>
                    <span className="iconfont">
                      <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                        <path d="M903.808 239.04l-818.304 0 0 545.92 852.992 0 0-545.92-34.688 0zM869.664 273.152l-329.536 329.536c-15.04 15.04-41.248 15.04-56.288 0l-329.6-329.536 715.392 0zM119.616 286.752l221.536 221.504-221.536 221.536 0-443.072zM146.848 750.848l218.464-218.432 94.432 94.4c13.952 13.952 32.512 21.664 52.256 21.664s38.304-7.712 52.256-21.664l94.432-94.432 218.432 218.432-730.304 0zM904.384 729.824l-221.536-221.568 221.536-221.568 0 443.136z" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:18971149078">
                    <span className="contact-link">
                      {formatMessage({
                        id: "phone",
                        defaultMessage: "phone"
                      })}
                    </span>
                    <span className="iconfont">
                      <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                        <path d="M256 1024l512 0c26.464 0 48-21.536 48-48l0-928c0-26.464-21.536-48-48-48l-512 0c-26.464 0-48 21.536-48 48l0 928c0 26.464 21.536 48 48 48zM240 48c0-8.832 7.168-16 16-16l512 0c8.832 0 16 7.168 16 16l0 928c0 8.832-7.168 16-16 16l-512 0c-8.832 0-16-7.168-16-16l0-928zM288 864l448 0c8.832 0 16-7.168 16-16l0-672c0-8.832-7.168-16-16-16l-448 0c-8.832 0-16 7.168-16 16l0 672c0 8.832 7.168 16 16 16zM304 192l416 0 0 640-416 0 0-640zM496 928c0 17.664 14.336 32 32 32s32-14.336 32-32c0-17.664-14.336-32-32-32-17.664 0-32 14.336-32 32zM448 128l128 0c8.832 0 16-7.168 16-16s-7.168-16-16-16l-128 0c-8.832 0-16 7.168-16 16s7.168 16 16 16z" />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </section>
          </header>

          <div className="content-bd">
            <div className="content-left">
              <section className="practice">
                <header className="section-hd">
                  <span className="section-title-l" />
                  <h2 className="section-title">经历</h2>
                  <span className="section-title-r" />
                </header>
                <div className="section-bd">
                  {/* 经历:工作 */}
                  <div className="item">
                    <header className="item-hd">
                      <h3 className="item-name">武汉斗鱼网络科技有限公司</h3>
                      <span className="item-time">2017.07 至今</span>
                      <a className="btn item-more" href="https://www.douyu.com">
                        工作
                      </a>
                    </header>
                    <div className="item-bd">
                      <p className="item-des">
                        于斗鱼页面流量线做斗鱼微信小程序,斗鱼视频站,斗鱼移动端,快应用,头条小程序的开发。
                        涉及如下工作：
                      </p>
                      <ul className="section-content">
                        <li>斗鱼春节红包裂变活动服务端开发,红包零钱实时到账</li>
                        <li>
                          斗鱼移动端管理平台构建和维护(项目创建者)。具有APP换肤,弹幕降级,软硬解码管理等功能
                        </li>
                        <li>
                          斗鱼小程序管理平台构建和维护(项目创建者)。具有斗鱼春节红包裂变活动,斗鱼小程序模板配置，消息推送管理,小程序挂件管理等功能
                        </li>
                        <li>
                          小组后台框架初始化和基本组件维护,例如接入公司OA，权限管理系统的基本代码库
                        </li>
                        <li>
                          斗鱼云资源管理平台维护,主要负责管控公司所有的存储服务。后端存储服务对接阿里OSS,内部机密数据对接
                          <a
                            target="_blank"
                            href="https://github.com/ceph/ceph"
                          >
                            ceph
                          </a>
                          。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="project">
                <header className="section-hd">
                  <span className="section-title-l" />
                  <h2 className="section-title">项目</h2>
                  <span className="section-title-r" />
                </header>
                <div className="section-bd">
                  以下是我的开源项目与总结，思路与细节请点击链接查看文档
                  {/* 项目:Golang */}
                  <div className="item">
                    <header className="item-hd">
                      <a className="btn item-more" href="https://golang.org">
                        Golang
                      </a>
                    </header>
                    <div className="item-bd">
                      <ul>
                        <li>
                          <a href="https://github.com/linthan/encryptapi-demo">
                            encryptapi-demo
                          </a>
                          : 接口加密鉴权DEMO
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://github.com/linthan/echoboot"
                          >
                            echoboot
                          </a>
                          :{"     "}
                          开发web应用的脚手架,快速开始一个
                          <a
                            target="_blank"
                            href="https://github.com/labstack/echo"
                          >
                            echo
                          </a>
                          项目。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="content-right">
              <section className="skill">
                <header className="section-hd">
                  <span className="section-title-l" />
                  <h2 className="section-title">技能</h2>
                  <span className="section-title-r" />
                </header>
                <div className="section-bd">
                  {/* Golang */}
                  <div className="item">
                    <header className="item-hd">
                      <span className="item-time">Golang</span>
                      <a className="btn item-more">精通</a>
                    </header>
                    <div className="item-bd">
                      <ul className="section-content">
                        <li>
                          用golang作为工作语言开发过多个在生产环境中使用的服务与库。
                        </li>
                        <li>熟悉golang并发编程，并发安全。</li>
                        <li>
                          熟悉在web开发中，golang接口限流,熔断,缓存，以及各种中间件的开发。
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* 技能:JS */}
                  <div className="item">
                    <header className="item-hd">
                      <span className="item-time">Web</span>
                      <a className="btn item-more">精通</a>
                    </header>
                    <div className="item-bd">
                      <ul className="section-content">
                        <li>
                          熟知JS基本语法与知识，掌握最新JS语法与API以及TypeScript
                        </li>
                        <li>
                          掌握网页重构所需的CSS、Less(由于
                          <a href="https://ant.design/index-cn" target="_blank">
                            antd
                          </a>
                          ,这个使用的较多)、SCSS
                        </li>
                        <li>
                          掌握前端流行框架React(精通)、Angular(熟练)、Vue(熟练)
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* React */}
                  <div className="item">
                    <header className="item-hd">
                      <span className="item-time">React</span>
                      <a className="btn item-more">精通</a>
                    </header>
                    <div className="item-bd">
                      <ul className="section-content">
                        <li>
                          用React开发复杂应用，熟知React原理与生态技术栈经验丰富,在antd的基础上封装过交互较为复杂的组件库
                        </li>
                        <li>
                          熟练掌握
                          <a href="https://ant.design/index-cn" target="_blank">
                            ant design组件库
                          </a>
                          和
                          <a
                            target="_blank"
                            href="https://github.com/ant-design/ant-design-pro"
                          >
                            ant design pro
                          </a>
                        </li>
                        <li>
                          掌握React调试、性能优化、同构、ReactNative等扩展技能
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* english */}
                  <div className="item">
                    <header className="item-hd">
                      <span className="item-time">英语</span>
                      <a className="btn item-more">熟练</a>
                    </header>
                    <div className="item-bd">
                      <ul className="section-content">
                        <li>完全无障碍阅读技术类英语书籍</li>
                        <li>词汇量10000+</li>
                        <li>雅思6.0</li>
                        <li>英语六级600</li>
                      </ul>
                    </div>
                  </div>

                  {/* Webpack */}
                  <div className="item">
                    <header className="item-hd">
                      <span className="item-time">Webpack</span>
                      <a className="btn item-more">熟练</a>
                    </header>
                    <div className="item-bd">
                      <ul className="section-content">
                        <li>熟悉webpack的基本原理</li>
                        <li>
                          研究过基于webpack封装的一些脚手架工具。例如
                          <a href="https://umijs.org/">umi</a>和
                          <a href="https://github.com/sorrycc/roadhog">
                            raodhog
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* 云原生 */}
                  <div className="item">
                    <header className="item-hd">
                      <span className="item-time">云原生</span>
                      <a className="btn item-more">掌握</a>
                    </header>
                    <div className="item-bd">
                      <ul className="section-content">
                        <li>熟练使用Docker,k8s的命令,了解容器的运行的基理</li>
                        <li>
                          研究过分布式一致性协议(raft,paxos,gossip),熟悉
                          <a href="https://github.com/hashicorp/memberlist">
                            memberlist
                          </a>
                          和<a href="https://github.com/hashicorp/serf">serf</a>
                        </li>
                        <li>
                          了解接口网关(
                          <a href="https://github.com/Kong/kong">kong</a>
                          ),服务网格(<a href="https://istio.io/">istio</a> )。
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 数据库 */}
                  <div className="item">
                    <header className="item-hd">
                      <span className="item-time">数据库</span>
                      <a className="btn item-more">掌握</a>
                    </header>
                    <div className="item-bd">
                      <ul className="section-content">
                        <li>掌握关系型数据库基本概念与SQL</li>
                        <li>掌握Postgres、MongoDB、Redis及集群原理与搭建</li>
                      </ul>
                    </div>
                  </div>

                  {/* 其它 */}
                  <div className="item">
                    <header className="item-hd">
                      <span className="item-time">其它</span>
                      <a className="btn item-more">掌握</a>
                    </header>
                    <div className="item-bd">
                      <ul className="section-content">
                        <li>掌握Git、Docker、Java</li>
                        <li>资深Mac用户、资深vscode用户、长期使用Ubuntu系统</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        <footer className="github-footer">
          <a className="footer-link" href="https://github.com/gwuhaolin/resume">
            Host On Github
          </a>
        </footer>
      </>
    );
  }
}

export default Index;
