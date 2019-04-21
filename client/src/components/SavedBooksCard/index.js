import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const SavedBooksCard = props => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Saved Books</Card.Title>
        <Card>
          <Card.Header></Card.Header>
          <Card.Body>
            <Row noGutters>
              <Col lg={10}>
                <Card.Title>Special title treatment</Card.Title>
                <p>By Bob</p>
              </Col>
              <Col lg={2} className="text-right">
                <Button variant="primary">View</Button>
                <Button variant="primary" className="ml-1">Save</Button>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <img className="book-img" src="https://via.placeholder.com/200x300" alt="book cover" />
              </Col>
              <Col lg={9}>
                iashfoi ajsoifj asojdf asj oifajsdofj aos[ jd[oiasj dfas jdfoiajsdf asj[0dfja0 sj f[oaisjdfoajsdf ioasjfoiajs [df j as[oifj [asjfa[sjf [oiasjf[ojas[0oi]]]]]]]]]]] ;lkseiahfplko ja [osi jfasfas[dof[o as[0jfoias[oij df 0ji[aj-w] o9efpo  a]wpoi fj]0oiaj w]-o-fja]0w eoat]90he  ta0]owewo0a0]oiwh oet asplodjp]of gja=0s cvo[kas av0ew ]09agn[oijso d[gaoiw ova[oi gf[osah gfhoasjf lakso;nfnaw[o nawpoif hawo[ifn asof0awj efoi[awjf oka wmof aw foaof ]poasoi]f j0iawefjo aw]epomawpe fmas f oaiw jfa hwefj awe]]]] sdr]pog ksoaerpoewfPAJP OAS[POIDFJ[P IOAS[PF JOI[ASOIF AJOIS[PJO F POIS[POF[PJO ASJDFPO ]P0OIJAJ-OF GJOA 'POVJpojfpjaijjoiajewp t \jaj\ fp]o asjnpoivoijsof jsdko fksjdk fkdko fkkdsf jkskfks ;faji d;odfko kcfjaois[ oif a']]]]]]
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
};

export default SavedBooksCard;
