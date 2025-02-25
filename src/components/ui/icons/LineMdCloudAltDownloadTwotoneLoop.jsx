"use client"

import React from "react"

export function LineMdCloudAltDownloadTwotoneLoop(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
      <mask id="lineMdCloudAltDownloadTwotoneLoop0">
        <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
          <path
            strokeDasharray={64}
            strokeDashoffset={64}
            d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"
          >
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
            <set fill="freeze" attributeName="opacity" begin="0.7s" to={0}></set>
          </path>
          <g fill="#fff" stroke="none" opacity={0}>
            <circle cx={12} cy={10} r={6}>
              <animate
                attributeName="cx"
                begin="0.7s"
                dur="30s"
                repeatCount="indefinite"
                values="12;11;12;13;12"
              ></animate>
            </circle>
            <rect width={9} height={8} x={8} y={12}></rect>
            <rect width={15} height={12} x={1} y={8} rx={6}>
              <animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></animate>
            </rect>
            <rect width={13} height={10} x={10} y={10} rx={5}>
              <animate
                attributeName="x"
                begin="0.7s"
                dur="17s"
                repeatCount="indefinite"
                values="10;9;10;11;10"
              ></animate>
            </rect>
            <set fill="freeze" attributeName="opacity" begin="0.7s" to={1}></set>
          </g>
          <g fill="#000" fillOpacity={0} stroke="none">
            <circle cx={12} cy={10} r={4}>
              <animate
                attributeName="cx"
                begin="0.7s"
                dur="30s"
                repeatCount="indefinite"
                values="12;11;12;13;12"
              ></animate>
            </circle>
            <rect width={9} height={6} x={8} y={12}></rect>
            <rect width={11} height={8} x={3} y={10} rx={4}>
              <animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></animate>
            </rect>
            <rect width={9} height={6} x={12} y={12} rx={3}>
              <animate
                attributeName="x"
                begin="0.7s"
                dur="17s"
                repeatCount="indefinite"
                values="12;11;12;13;12"
              ></animate>
            </rect>
            <set fill="freeze" attributeName="fill-opacity" begin="0.7s" to={1}></set>
            <animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.15s" values="1;0.7"></animate>
          </g>
          <g fill="#fff" stroke="none">
            <path d="M10.5 10h3v0h-3z">
              <animate
                fill="freeze"
                attributeName="d"
                begin="0.95s"
                dur="0.2s"
                values="M10.5 10h3v0h-3z;M10.5 10h3v4h-3z"
              ></animate>
            </path>
            <path d="M8 13h8l-4 0z">
              <animate
                fill="freeze"
                attributeName="d"
                begin="1.15s"
                dur="0.1s"
                values="M8 13h8l-4 0z;M8 13h8l-4 4z"
              ></animate>
              <animateMotion
                begin="1.25s"
                calcMode="linear"
                dur="1.5s"
                keyPoints="0;0.25;0.5;0.75;1"
                keyTimes="0;0.1;0.5;0.8;1"
                path="M0 0v1v-2z"
                repeatCount="indefinite"
              ></animateMotion>
            </path>
          </g>
        </g>
      </mask>
      <rect width={24} height={24} fill="currentColor" mask="url(#lineMdCloudAltDownloadTwotoneLoop0)"></rect>
    </svg>
  )
}
