import React, { useState } from 'react';
import { GridGenerator, HexGrid, Layout, Path, Hexagon, Text } from 'react-hexgrid';
import { Row, Col, Button } from 'react-bootstrap'
import data from './utils/hexagonData'

const Hexagons = () => {

    const [activeTile, setActiveTile] = useState(null);

    const config = {
        "width": 1000,
        "height": 600,
        "layout": { "width": 8, "height": 8, "flat": false, "spacing": 1.02 },
        "origin": { "x": 0, "y": 0 },
        "map": "hexagon",
        "mapProps": [3]
    }
    const hexagonSize = { x: 10, y: 10 };
    const moreHexas = GridGenerator.parallelogram(-2, 2, -2, 2);
    const size = { x: config.layout.width, y: config.layout.height };

    const click = (e, h, value) => {
        try {
            const tile = data.find(d => d.value === value)
            setActiveTile(tile)
        } catch {

        }
    }

    return (
        <div>
            <div>
                <HexGrid width={config.width} height={config.height} className="App" viewBox="-50 -40 100 100">
                    {/* Main grid with bit hexagons, all manual */}
                    <Layout size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
                        <Hexagon className={activeTile?.value === 'rvcMetrics' ? "active" : "inactive"} q={0} r={0} s={0} onClick={(e, h) => click(e, h, 'rvcMetrics')}> <Text className="hex-text" >RVC Metrics</Text>/</Hexagon>

                        <Hexagon className={activeTile?.value === 'topLevelMetrics' ? "active" : "inactive"} q={0} r={-1} s={1} onClick={(e, h) => click(e, h, 'topLevelMetrics')}><Text className="hex-text">Top Level Metrics</Text>/</Hexagon>

                        <Hexagon className={activeTile?.value === 'ongoingMetrics' ? "active" : "inactive"} q={0} r={1} s={-1} onClick={(e, h) => click(e, h, 'ongoingMetrics')}><Text className="hex-text">Ongoing Metrics</Text></Hexagon>

                        <Hexagon className={activeTile?.value === 'sourcingMetrics' ? "active" : "inactive"} q={2} r={-1} s={3} onClick={(e, h) => click(e, h, 'sourcingMetrics')}><Text className="hex-text">Sourcing Metrics</Text></Hexagon>

                        <Hexagon className={activeTile?.value === 'financialMetrics' ? "active" : "inactive"} q={1} r={-1} s={0} onClick={(e, h) => click(e, h, 'financialMetrics')}><Text className="hex-text">Financial Metrics</Text></Hexagon>

                        <Hexagon className={activeTile?.value === 'grfoMetrics' ? "active" : "inactive"} q={1} r={0} s={-1} onClick={(e, h) => click(e, h, 'grfoMetrics')}><Text className="hex-text">GRFO Metrics</Text></Hexagon>

                        <Hexagon className={activeTile?.value === 'logisticsMetrics' ? "active" : "inactive"} q={2} r={-2} s={-3} onClick={(e, h) => click(e, h, 'logisticsMetrics')}><Text className="hex-text">Logistic Metrics</Text></Hexagon>

                        <Hexagon className={activeTile?.value === 'partLifecycleMgmt' ? "active" : "inactive"} q={-1} r={2} s={-3} onClick={(e, h) => click(e, h, 'partLifecycleMgmt')}><Text className="hex-text">Part Lifecycle Mgmt</Text></Hexagon>

                        <Hexagon className={activeTile?.value === 'orderFulfillment' ? "active" : "inactive"} q={-1} r={0} s={0} onClick={(e, h) => click(e, h, 'orderFulfillment')}><Text className="hex-text">Order Fullfilment</Text></Hexagon>

                        <Hexagon className={activeTile?.value === 'performanceMetrics' ? "active" : "inactive"} q={-1} r={1} s={1} onClick={(e, h) => click(e, h, 'performanceMetrics')}><Text className="hex-text">Performance Metrics</Text>/</Hexagon>

                        <Hexagon className={activeTile?.value === 'procurement' ? "active" : "inactive"} q={2} r={0} s={1} onClick={(e, h) => click(e, h, 'procurement')}><Text className="hex-text">Procurement New/Repair</Text>/</Hexagon>

                        <Hexagon className={activeTile?.value === 'demandPlanning' ? "active" : "inactive"} q={1} r={1} s={2} onClick={(e, h) => click(e, h, 'demandPlanning')}><Text className="hex-text">Demand Planning</Text></Hexagon>
                    </Layout>
                </HexGrid>
                {
                    activeTile &&
                    (
                        <>
                            <h4>{activeTile?.label}</h4>
                            <Row className="app-mb-5">
                                {
                                    activeTile?.buttons.map(b => {
                                        return (
                                            <Col md={2}>
                                                <Button className="mt-4" variant="outline-secondary">{b}</Button>{' '}
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Hexagons;