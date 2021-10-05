import React from "react"

import Layout from '../components/layout'
import * as  homeCss from '../scss/index.module.scss'

const ProjectPage = () => {
  return (
    <Layout>
      <div>
        <div className={homeCss.container}>
          <div className={homeCss.row}>
            <div className={homeCss.column}>
            </div>
            <div className={homeCss.column}>
              <div className={homeCss.intro}>
                <h1>Coming Soon</h1>
              </div>
            </div>
          </div>      
        </div>
        <div className={homeCss.containerCurve}>
          <div className={homeCss.container}>
            <div className={homeCss.row}>
              <div className={homeCss.column}>
                <div className={homeCss.blockContainer}>
                </div>
              </div>
              <div className={homeCss.column}>
                <div className={homeCss.blockContainer}>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage