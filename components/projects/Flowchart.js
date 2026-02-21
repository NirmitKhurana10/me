import React, { useCallback } from 'react'
import ReactFlow, {
    Background,
    Controls,
    useNodesState,
    useEdgesState,
    MarkerType,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { styled } from '../../stitches.config'

const FlowchartCtx = ({ nodes: initialNodes, edges: initialEdges }) => {
    const [nodes, , onNodesChange] = useNodesState(initialNodes || [])
    const [edges, , onEdgesChange] = useEdgesState(initialEdges || [])

    const onInit = useCallback((reactFlowInstance) => {
        reactFlowInstance.fitView()
    }, [])

    if (!initialNodes || initialNodes.length === 0) return null

    return (
        <Wrapper>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onInit={onInit}
                fitView
                attributionPosition="bottom-right"
                defaultEdgeOptions={{
                    type: 'smoothstep',
                    markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' },
                    style: { stroke: '#94a3b8', strokeWidth: 1.5 },
                    animated: true,
                    labelStyle: { fill: '#94a3b8', fontWeight: 500, fontSize: 11 },
                    labelBgStyle: { fill: '#0a0a0a', fillOpacity: 0.9 },
                    labelBgPadding: [6, 4],
                    labelBgBorderRadius: 4,
                }}
            >
                {/* Dark theme styling for React Flow controls/bg is handled via CSS/props */}
                <Background color="rgba(212,162,76,0.15)" gap={24} />
                <Controls />
            </ReactFlow>
            <Overlay>
                <span>Interactive Flowchart</span>
            </Overlay>
        </Wrapper>
    )
}

const Wrapper = styled('div', {
    width: '100%',
    height: '500px',
    background: '#0a0a0a',
    border: '1px solid rgba(212,162,76,0.2)',
    borderRadius: '12px',
    position: 'relative',
    overflow: 'hidden',
    marginTop: '40px',
    marginBottom: '40px',
    // ReactFlow Controls dark theme overrides
    '.react-flow__controls': {
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
    },
    '.react-flow__controls-button': {
        background: 'rgba(10,10,10,0.9)',
        border: '1px solid rgba(212,162,76,0.25)',
        borderRadius: '6px',
        width: '28px',
        height: '28px',
        padding: '5px',
        marginBottom: '4px',
        '&:hover': {
            background: 'rgba(212,162,76,0.15)',
            borderColor: 'rgba(212,162,76,0.5)',
        },
        '& svg': {
            fill: '#d4a24c',
        },
        '& path': {
            fill: '#d4a24c',
        },
    },
    // Attribution
    '.react-flow__attribution': {
        background: 'transparent',
        '& a': {
            color: 'rgba(212,162,76,0.3)',
            fontSize: '9px',
        },
    },
})

const Overlay = styled('div', {
    position: 'absolute',
    top: '16px',
    right: '16px',
    padding: '6px 12px',
    background: 'rgba(10,10,10,0.85)',
    borderRadius: '6px',
    border: '1px solid rgba(212,162,76,0.2)',
    pointerEvents: 'none',
    span: {
        color: '#d4a24c',
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        fontWeight: '600',
    }
})

export default FlowchartCtx
