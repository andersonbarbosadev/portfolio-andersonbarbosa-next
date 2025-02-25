import * as adobeXd from "Public/svg/skills/adobe-xd.svg"
import adobeaudition from "Public/svg/skills/adobeaudition.svg"
import afterEffects from "Public/svg/skills/after-effects.svg"
import angular from "Public/svg/skills/angular.svg"
import aws from "Public/svg/skills/aws.svg"
import azure from "Public/svg/skills/azure.svg"
import blender from "Public/svg/skills/blender.svg"
import bootstrap from "Public/svg/skills/bootstrap.svg"
import bulma from "Public/svg/skills/bulma.svg"
import c from "Public/svg/skills/c.svg"
import canva from "Public/svg/skills/canva.svg"
import capacitorjs from "Public/svg/skills/capacitorjs.svg"
import coffeescript from "Public/svg/skills/coffeescript.svg"
import cplusplus from "Public/svg/skills/cplusplus.svg"
import csharp from "Public/svg/skills/csharp.svg"
import css from "Public/svg/skills/css.svg"
import dart from "Public/svg/skills/dart.svg"
import deno from "Public/svg/skills/deno.svg"
import django from "Public/svg/skills/django.svg"
import docker from "Public/svg/skills/docker.svg"
import fastapi from "Public/svg/skills/fastapi.svg"
import fastify from "Public/svg/skills/fastify.svg"
import figma from "Public/svg/skills/figma.svg"
import firebase from "Public/svg/skills/firebase.svg"
import flutter from "Public/svg/skills/flutter.svg"
import gcp from "Public/svg/skills/gcp.svg"
import gimp from "Public/svg/skills/gimp.svg"
import git from "Public/svg/skills/git.svg"
import go from "Public/svg/skills/go.svg"
import graphql from "Public/svg/skills/graphql.svg"
import haxe from "Public/svg/skills/haxe.svg"
import html from "Public/svg/skills/html.svg"
import illustrator from "Public/svg/skills/illustrator.svg"
import ionic from "Public/svg/skills/ionic.svg"
import java from "Public/svg/skills/java.svg"
import javascript from "Public/svg/skills/javascript.svg"
import jenkins from "Public/svg/skills/jenkins.svg"
import jquery from "Public/svg/skills/jquery.svg"
import julia from "Public/svg/skills/julia.svg"
import kotlin from "Public/svg/skills/kotlin.svg"
import laravel from "Public/svg/skills/laravel.svg"
import lightroom from "Public/svg/skills/lightroom.svg"
import markdown from "Public/svg/skills/markdown.svg"
import materialui from "Public/svg/skills/materialui.svg"
import matlab from "Public/svg/skills/matlab.svg"
import memsql from "Public/svg/skills/memsql.svg"
import microsoftoffice from "Public/svg/skills/microsoftoffice.svg"
import mongoDB from "Public/svg/skills/mongoDB.svg"
import mysql from "Public/svg/skills/mysql.svg"
import nextJS from "Public/svg/skills/nextJS.svg"
import nginx from "Public/svg/skills/nginx.svg"
import numpy from "Public/svg/skills/numpy.svg"
import nuxtJS from "Public/svg/skills/nuxtJS.svg"
import opencv from "Public/svg/skills/opencv.svg"
import photoshop from "Public/svg/skills/photoshop.svg"
import php from "Public/svg/skills/php.svg"
import picsart from "Public/svg/skills/picsart.svg"
import postgresql from "Public/svg/skills/postgresql.svg"
import premierepro from "Public/svg/skills/premierepro.svg"
import python from "Public/svg/skills/python.svg"
import pytorch from "Public/svg/skills/pytorch.svg"
import react from "Public/svg/skills/react.svg"
import ruby from "Public/svg/skills/ruby.svg"
import selenium from "Public/svg/skills/selenium.svg"
import sketch from "Public/svg/skills/sketch.svg"
import sql from "Public/svg/skills/sql.svg"
import strapi from "Public/svg/skills/strapi.svg"
import svelte from "Public/svg/skills/svelte.svg"
import swift from "Public/svg/skills/swift.svg"
import symfony from "Public/svg/skills/symfony.svg"
import tailwind from "Public/svg/skills/tailwind.svg"
import tensorflow from "Public/svg/skills/tensorflow.svg"
import typescript from "Public/svg/skills/typescript.svg"
import unity from "Public/svg/skills/unity.svg"
import vitejs from "Public/svg/skills/vitejs.svg"
import vue from "Public/svg/skills/vue.svg"
import vuetifyjs from "Public/svg/skills/vuetifyjs.svg"
import webix from "Public/svg/skills/webix.svg"
import wolframalpha from "Public/svg/skills/wolframalpha.svg"
import wordpress from "Public/svg/skills/wordpress.svg"

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase()
  switch (skillID) {
    case "gcp":
      return gcp
    case "html":
      return html
    case "photoshop":
      return photoshop
    case "docker":
      return docker
    case "illustrator":
      return illustrator
    case "adobe xd":
      return adobeXd
    case "after effects":
      return afterEffects
    case "css":
      return css
    case "angular":
      return angular
    case "javascript":
      return javascript
    case "next js":
      return nextJS
    case "nuxt js":
      return nuxtJS
    case "react":
      return react
    case "svelte":
      return svelte
    case "typescript":
      return typescript
    case "vue":
      return vue
    case "bootstrap":
      return bootstrap
    case "bulma":
      return bulma
    case "capacitorjs":
      return capacitorjs
    case "coffeescript":
      return coffeescript
    case "memsql":
      return memsql
    case "mongodb":
      return mongoDB
    case "mysql":
      return mysql
    case "postgresql":
      return postgresql
    case "tailwind":
      return tailwind
    case "vitejs":
      return vitejs
    case "vuetifyjs":
      return vuetifyjs
    case "c":
      return c
    case "c++":
      return cplusplus
    case "c#":
      return csharp
    case "dart":
      return dart
    case "go":
      return go
    case "java":
      return java
    case "kotlin":
      return kotlin
    case "julia":
      return julia
    case "matlab":
      return matlab
    case "php":
      return php
    case "python":
      return python
    case "ruby":
      return ruby
    case "swift":
      return swift
    case "adobe audition":
      return adobeaudition
    case "aws":
      return aws
    case "deno":
      return deno
    case "django":
      return django
    case "firebase":
      return firebase
    case "gimp":
      return gimp
    case "git":
      return git
    case "graphql":
      return graphql
    case "lightroom":
      return lightroom
    case "materialui":
      return materialui
    case "nginx":
      return nginx
    case "numpy":
      return numpy
    case "opencv":
      return opencv
    case "premiere pro":
      return premierepro
    case "pytorch":
      return pytorch
    case "selenium":
      return selenium
    case "strapi":
      return strapi
    case "tensorflow":
      return tensorflow
    case "webix":
      return webix
    case "wordpress":
      return wordpress
    case "azure":
      return azure
    case "blender":
      return blender
    case "fastify":
      return fastify
    case "figma":
      return figma
    case "flutter":
      return flutter
    case "haxe":
      return haxe
    case "ionic":
      return ionic
    case "markdown":
      return markdown
    case "microsoft office":
      return microsoftoffice
    case "picsart":
      return picsart
    case "sketch":
      return sketch
    case "unity":
      return unity
    case "wolframalpha":
      return wolframalpha
    case "canva":
      return canva
    case "jquery":
      return jquery
    case "sql":
      return sql
    case "jenkins":
      return jenkins
    case "laravel":
      return laravel
    case "symfony":
      return symfony
    case "fastapi":
      return fastapi
    default:
      break
  }
}
