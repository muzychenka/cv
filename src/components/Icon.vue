<template>
  <div>
    <Web v-if="computedName === 'web'" />
    <LinkedIn v-if="computedName === 'linkedin'" />
    <Instagram v-if="computedName === 'instagram'" />
    <Telegram v-if="computedName === 'telegram'" />
    <Github v-if="computedName === 'github'" />
    <Arrow v-if="computedName === 'arrow'" />
    <Vue v-if="computedName === 'vue'" />
    <React v-if="computedName === 'react'" />
    <Git v-if="computedName === 'git'" />
    <JS v-if="computedName === 'js'" />
    <HTML v-if="computedName === 'html'" />
    <CSS v-if="computedName === 'css'" />
    <Docker v-if="computedName === 'docker'" />
    <Vagrant v-if="computedName === 'vagrant'" />
    <SASS v-if="computedName === 'sass'" />
    <NodeJS v-if="computedName === 'nodejs'" />
    <Webpack v-if="computedName === 'webpack'" />
    <Jira v-if="computedName === 'jira'" />
    <Ubuntu v-if="computedName === 'ubuntu'" />
    <MySQL v-if="computedName === 'mysql'" />
    <REST v-if="computedName === 'rest'" />
    <Caution v-if="computedName === 'caution'" />
  </div>
</template>

<script>
import Web from '@/assets/icons/web.svg'
import LinkedIn from '@/assets/icons/linkedin.svg'
import Instagram from '@/assets/icons/instagram.svg'
import Telegram from '@/assets/icons/telegram.svg'
import Github from '@/assets/icons/github.svg'
import Arrow from '@/assets/icons/arrow.svg'
import Vue from '@/assets/icons/vue.svg'
import React from '@/assets/icons/react.svg'
import Git from '@/assets/icons/git.svg'
import JS from '@/assets/icons/js.svg'
import HTML from '@/assets/icons/html.svg'
import CSS from '@/assets/icons/css.svg'
import Docker from '@/assets/icons/docker.svg'
import Vagrant from '@/assets/icons/vagrant.svg'
import SASS from '@/assets/icons/sass.svg'
import NodeJS from '@/assets/icons/nodejs.svg'
import Webpack from '@/assets/icons/webpack.svg'
import Jira from '@/assets/icons/jira.svg'
import Ubuntu from '@/assets/icons/ubuntu.svg'
import MySQL from '@/assets/icons/mysql.svg'
import REST from '@/assets/icons/rest.svg'
import Caution from '@/assets/icons/caution.svg'

export default {
  name: 'Icon',
  props: {
    name
  },
  computed: {
    computedName () {
      return this.name.toLowerCase()
    }
  },
  components: {
    Web,
    LinkedIn,
    Instagram,
    Telegram,
    Github,
    Arrow,
    Vue,
    React,
    Git,
    JS,
    HTML,
    CSS,
    Docker,
    Vagrant,
    SASS,
    NodeJS,
    Webpack,
    Jira,
    Ubuntu,
    MySQL,
    REST,
    Caution
  }
}
</script>

<style lang="scss">
div {
  display: flex;
}
</style>
