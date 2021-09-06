export default function (value) {
    const masks = JSON.parse("{\"1\":\"+1(###)###-####\",\"7\":\"+7(###)###-##-##\",\"20\":\"+20(###)###-####\",\"27\":\"+27-##-###-####\",\"30\":\"+30(###)###-####\",\"31\":\"+31-##-###-####\",\"32\":\"+32(###)###-###\",\"33\":\"+33(###)###-###\",\"34\":\"+34(###)###-###\",\"36\":\"+36(###)###-###\",\"39\":\"+39(###)####-###\",\"40\":\"+40-##-###-####\",\"41\":\"+41-##-###-####\",\"43\":\"+43(###)###-####\",\"44\":\"+44-##-####-####\",\"45\":\"+45-##-##-##-##\",\"46\":\"+46-##-###-####\",\"47\":\"+47(###)##-###\",\"48\":\"+48(###)###-###\",\"49\":\"+49-###-###\",\"51\":\"+51(###)###-###\",\"52\":\"+52-##-##-####\",\"53\":\"+53-#-###-####\",\"54\":\"+54(###)###-####\",\"55\":\"+55(##)####-####\",\"56\":\"+56-#-####-####\",\"57\":\"+57(###)###-####\",\"58\":\"+58(###)###-####\",\"60\":\"+60-#-###-###\",\"61\":\"+61-#-####-####\",\"62\":\"+62-##-###-####\",\"63\":\"+63(###)###-####\",\"64\":\"+64(###)###-####\",\"65\":\"+65-####-####\",\"66\":\"+66-##-###-###\",\"76\":\"+7(6##)###-##-##\",\"77\":\"+7(7##)###-##-##\",\"81\":\"+81(###)###-###\",\"82\":\"+82-##-###-####\",\"84\":\"+84(###)####-###\",\"86\":\"+86-##-#####-#####\",\"90\":\"+90(###)###-####\",\"91\":\"+91(####)###-###\",\"92\":\"+92(###)###-####\",\"93\":\"+93-##-###-####\",\"94\":\"+94-##-###-####\",\"95\":\"+95-###-###\",\"98\":\"+98(###)###-####\",\"211\":\"+211-##-###-####\",\"212\":\"+212-##-####-###\",\"213\":\"+213-##-###-####\",\"216\":\"+216-##-###-###\",\"218\":\"+218-##-###-###\",\"220\":\"+220(###)##-##\",\"221\":\"+221-##-###-####\",\"222\":\"+222-##-##-####\",\"223\":\"+223-##-##-####\",\"224\":\"+224-##-###-###\",\"225\":\"+225-##-###-###\",\"226\":\"+226-##-##-####\",\"227\":\"+227-##-##-####\",\"228\":\"+228-##-###-###\",\"229\":\"+229-##-##-####\",\"230\":\"+230-###-####\",\"231\":\"+231-##-###-###\",\"232\":\"+232-##-######\",\"233\":\"+233(###)###-###\",\"234\":\"+234-##-###-##\",\"235\":\"+235-##-##-##-##\",\"236\":\"+236-##-##-####\",\"237\":\"+237-####-####\",\"238\":\"+238(###)##-##\",\"239\":\"+239-##-#####\",\"240\":\"+240-##-###-####\",\"241\":\"+241-#-##-##-##\",\"242\":\"+242-##-###-####\",\"243\":\"+243(###)###-###\",\"244\":\"+244(###)###-###\",\"245\":\"+245-#-######\",\"246\":\"+246-###-####\",\"247\":\"+247-####\",\"248\":\"+248-#-###-###\",\"249\":\"+249-##-###-####\",\"250\":\"+250(###)###-###\",\"251\":\"+251-##-###-####\",\"252\":\"+252-#-###-###\",\"253\":\"+253-##-##-##-##\",\"254\":\"+254-###-######\",\"255\":\"+255-##-###-####\",\"256\":\"+256(###)###-###\",\"257\":\"+257-##-##-####\",\"258\":\"+258-##-###-###\",\"260\":\"+260-##-###-####\",\"261\":\"+261-##-##-#####\",\"262\":\"+262-#####-####\",\"263\":\"+263-#-######\",\"264\":\"+264-##-###-####\",\"265\":\"+265-#-####-####\",\"266\":\"+266-#-###-####\",\"267\":\"+267-##-###-###\",\"268\":\"+268-##-##-####\",\"269\":\"+269-##-#####\",\"290\":\"+290-####\",\"291\":\"+291-#-###-###\",\"297\":\"+297-###-####\",\"298\":\"+298-###-###\",\"299\":\"+299-##-##-##\",\"350\":\"+350-###-#####\",\"351\":\"+351-##-###-####\",\"352\":\"+352(###)###-###\",\"353\":\"+353(###)###-###\",\"354\":\"+354-###-####\",\"355\":\"+355(###)###-###\",\"356\":\"+356-####-####\",\"357\":\"+357-##-###-###\",\"358\":\"+358(###)###-##-##\",\"359\":\"+359(###)###-###\",\"370\":\"+370(###)##-###\",\"371\":\"+371-##-###-###\",\"372\":\"+372-###-####\",\"373\":\"+373-####-####\",\"374\":\"+374-##-###-###\",\"375\":\"+375(##)###-##-##\",\"376\":\"+376-###-###\",\"377\":\"+377-##-###-###\",\"378\":\"+378-####-######\",\"380\":\"+380(##)###-##-##\",\"381\":\"+381-##-###-####\",\"382\":\"+382-##-###-###\",\"385\":\"+385-##-###-###\",\"386\":\"+386-##-###-###\",\"387\":\"+387-##-####\",\"389\":\"+389-##-###-###\",\"420\":\"+420(###)###-###\",\"421\":\"+421(###)###-###\",\"423\":\"+423(###)###-####\",\"500\":\"+500-#####\",\"501\":\"+501-###-####\",\"502\":\"+502-#-###-####\",\"503\":\"+503-##-##-####\",\"504\":\"+504-####-####\",\"505\":\"+505-####-####\",\"506\":\"+506-####-####\",\"507\":\"+507-###-####\",\"508\":\"+508-##-####\",\"509\":\"+509-##-##-####\",\"557\":\"+55(##)7###-####\",\"559\":\"+55(##)9####-####\",\"590\":\"+590(###)###-###\",\"591\":\"+591-#-###-####\",\"592\":\"+592-###-####\",\"593\":\"+593-#-###-####\",\"594\":\"+594-#####-####\",\"595\":\"+595(###)###-###\",\"596\":\"+596(###)##-##-##\",\"597\":\"+597-###-###\",\"598\":\"+598-#-###-##-##\",\"599\":\"+599-###-####\",\"628\":\"+62(8##)###-##-###\",\"670\":\"+670-###-####\",\"673\":\"+673-###-####\",\"674\":\"+674-###-####\",\"675\":\"+675(###)##-###\",\"676\":\"+676-#####\",\"677\":\"+677-#####\",\"678\":\"+678-#####\",\"679\":\"+679-##-#####\",\"680\":\"+680-###-####\",\"681\":\"+681-##-####\",\"682\":\"+682-##-###\",\"683\":\"+683-####\",\"685\":\"+685-##-####\",\"686\":\"+686-##-###\",\"687\":\"+687-##-####\",\"689\":\"+689-##-##-##\",\"690\":\"+690-####\",\"691\":\"+691-###-####\",\"692\":\"+692-###-####\",\"850\":\"+850-####-#############\",\"852\":\"+852-####-####\",\"853\":\"+853-####-####\",\"855\":\"+855-##-###-###\",\"856\":\"+856-##-###-###\",\"880\":\"+880-##-###-###\",\"886\":\"+886-####-####\",\"960\":\"+960-###-####\",\"961\":\"+961-#-###-###\",\"962\":\"+962-#-####-####\",\"963\":\"+963-##-####-###\",\"964\":\"+964(###)###-####\",\"965\":\"+965-####-####\",\"966\":\"+966-#-###-####\",\"967\":\"+967-##-###-###\",\"968\":\"+968-##-###-###\",\"970\":\"+970-##-###-####\",\"971\":\"+971-#-###-####\",\"972\":\"+972-#-###-####\",\"973\":\"+973-####-####\",\"974\":\"+974-####-####\",\"975\":\"+975-#-###-###\",\"976\":\"+976-##-##-####\",\"977\":\"+977-##-###-###\",\"992\":\"+992-##-###-####\",\"993\":\"+993-#-###-####\",\"994\":\"+994-##-###-##-##\",\"995\":\"+995(###)###-###\",\"996\":\"+996(###)###-###\",\"998\":\"+998-##-###-####\",\"1242\":\"+1(242)###-####\",\"1246\":\"+1(246)###-####\",\"1264\":\"+1(264)###-####\",\"1268\":\"+1(268)###-####\",\"1284\":\"+1(284)###-####\",\"1340\":\"+1(340)###-####\",\"1345\":\"+1(345)###-####\",\"1441\":\"+1(441)###-####\",\"1473\":\"+1(473)###-####\",\"1649\":\"+1(649)###-####\",\"1664\":\"+1(664)###-####\",\"1670\":\"+1(670)###-####\",\"1671\":\"+1(671)###-####\",\"1684\":\"+1(684)###-####\",\"1721\":\"+1(721)###-####\",\"1758\":\"+1(758)###-####\",\"1767\":\"+1(767)###-####\",\"1784\":\"+1(784)###-####\",\"1809\":\"+1(809)###-####\",\"1829\":\"+1(829)###-####\",\"1849\":\"+1(849)###-####\",\"1868\":\"+1(868)###-####\",\"1869\":\"+1(869)###-####\",\"1876\":\"+1(876)###-####\",\"2651\":\"+265-1-###-###\",\"5999\":\"+599-9###-####\",\"6721\":\"+672-1##-###\",\"6723\":\"+672-3##-###\",\"6882\":\"+688-2####\",\"9665\":\"+966-5-####-####\",\"9715\":\"+971-5#-###-####\",\"9725\":\"+972-5#-###-####\",\"21821\":\"+218-21-###-####\",\"67077\":\"+670-77#-#####\",\"67078\":\"+670-78#-#####\",\"68890\":\"+688-90####\",\"85620\":\"+856(20##)###-###\",\"97517\":\"+975-17-###-###\",\"396698\":\"+39-6-698-#####\",\"850191\":\"+850-191-###-####\"}");

    if (!value) {
        return '';
    }
    let strValue = value.toString();
    let l = strValue.length;
    if (l == 0) {
        return '';
    }

    while (l > 0) {
        let beginning = strValue.substring(0, l);
        if (masks.hasOwnProperty(beginning)) {
            return masks[beginning].replace(/[^+\s-\(\)]/g, '0').replace(/\s?\(\s?/g, ' (').replace(/\s?\)\s?/g, ') ');
        }
        l--;
    }

    return '';
}
