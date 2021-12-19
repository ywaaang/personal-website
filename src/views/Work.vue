<script setup lang="ts">
import WorkCard from "../components/WorkCard.vue";
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const content1En = `Using <span class="font-semibold text-blue-500">Vuejs</span>,<span class="font-semibold text-blue-500">Element UI</span> toanalyse logistic performance and provides data analysis with<span class="font-semibold text-blue-500">Echart.js</span>.`;
const content2En = `A
				<span class="font-semibold text-blue-500"
					>Chrome extension</span
				>
				+ <span class="font-semibold text-blue-500">React</span> Web to
				extract product information, analyse ingredeints, and display
				product healthiness.`;
const content3En = `Develop several H5 simple games to engage users, such as lottery
				draw, red pocket rain, running game with
				<span class="font-semibold text-blue-500">CSS Animation</span>,
				<span class="font-semibold text-blue-500">Frame Anime</span>,
				and <span class="font-semibold text-blue-500">lottie-web</span>`;
const content4En = `A personal assistant fullstack project with <span class="font-semibold 
                text-blue-500">Wechat Miniapp</span>, <span class="font-semibold text-blue-500">
                Koa/Nodejs</span> and <span class="font-semibold text-blue-500">GraphQL</span>. 
                It includes API redirecting to external providers, daily reminders, weather/stock/today 
                in history lookup.`;
const content1Cn = `使用<span class="font-semibold text-blue-500">Vuejs</span>和<span class="font-semibold text-blue-500">Element UI</span>搭建的供应链管理平台，用来分析和追踪货物运输，物流详情，供应链健康度等. 基于<span class="font-semibold text-blue-500">Echart.js</span>展示可视化图表.`;
const content2Cn = `一个<span class="font-semibold text-blue-500">谷歌浏览器插件</span>
				+ <span class="font-semibold text-blue-500">React</span>的PC+H5项目，用来抓取产品信息，分析成分并展示产品的健康度和有害物质的分析结果. `;
const content3Cn = `开发了多个H5营销小游戏, 例如抽奖, 红包雨等游戏, 利用
				<span class="font-semibold text-blue-500">CSS Animation</span>,
				<span class="font-semibold text-blue-500">帧动画</span>和<span class="font-semibold text-blue-500">lottie-web</span>`;
const content4Cn = `一个<span class="font-semibold 
                text-blue-500">微信助手小程序</span>的全栈项目 , 基于<span class="font-semibold text-blue-500">
                Koa/Nodejs</span>和<span class="font-semibold text-blue-500">GraphQL</span>. 
                包含接口查询, 接口转发, 文件上传, 以及天气、股票和历史上的今天查询功能. `;
</script>

<template>
	<div class="text-xl text-left text-gray-500 tracking-wide font-bold mb-40">
		{{t('work.title')}}
	</div>
	<div
		class="
			text-gray-800
			tracking-normal
			text-left
			mb-8
			flex
			justify-between
		"
	>
		<WorkCard :title="t('work.project1')" :content="locale === 'cn' ? content1Cn : content1En" />
		<WorkCard :title="t('work.project2')" :content="locale === 'cn' ? content2Cn : content2En" />
	</div>
	<div
		class="
			text-gray-800
			tracking-normal
			text-left
			mb-8
			flex
			justify-between
		"
	>
		<WorkCard :title="t('work.project3')" :content="locale === 'cn' ? content3Cn : content3En" />
		<WorkCard :title="t('work.project4')" :content="locale === 'cn' ? content4Cn : content4En" />
	</div>
</template>
