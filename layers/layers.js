var wms_layers = [];

var format_Krdmir_0 = new ol.format.GeoJSON();
var features_Krdmir_0 = format_Krdmir_0.readFeatures(json_Krdmir_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Krdmir_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Krdmir_0.addFeatures(features_Krdmir_0);
var lyr_Krdmir_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Krdmir_0, 
                style: style_Krdmir_0,
                interactive: true,
                title: '<img src="styles/legend/Krdmir_0.png" /> Kürdəmir'
            });
var lyr_Azrbaycanxritsi_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Azərbaycan xəritəsi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Azrbaycanxritsi_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [4983044.529502, 4635643.430340, 5608146.546719, 5147983.853994]
                            })
                        });
var lyr_Torpaq_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Torpaq",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Torpaq_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5314381.358522, 4858843.163555, 5415645.359712, 4956456.697075]
                            })
                        });
var lyr_Urbanizasiya_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Urbanizasiya",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Urbanizasiya_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5314381.358522, 4858843.163555, 5415645.359712, 4956456.697075]
                            })
                        });
var lyr_Bitki_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Bitki",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Bitki_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5314381.358522, 4858843.163555, 5415645.359712, 4956456.697075]
                            })
                        });
var lyr_Bataqlq_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Bataqlıq",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Bataqlq_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5314381.358522, 4858843.163555, 5415645.359712, 4956456.697075]
                            })
                        });
var lyr_Su_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Su",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Su_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5314381.358522, 4858843.163555, 5415645.359712, 4956456.697075]
                            })
                        });
var format_Kndlrvrazisahlri_7 = new ol.format.GeoJSON();
var features_Kndlrvrazisahlri_7 = format_Kndlrvrazisahlri_7.readFeatures(json_Kndlrvrazisahlri_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kndlrvrazisahlri_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kndlrvrazisahlri_7.addFeatures(features_Kndlrvrazisahlri_7);
var lyr_Kndlrvrazisahlri_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kndlrvrazisahlri_7, 
                style: style_Kndlrvrazisahlri_7,
                interactive: true,
                title: '<img src="styles/legend/Kndlrvrazisahlri_7.png" /> Kəndlər və ərazi sahələri'
            });

lyr_Krdmir_0.setVisible(true);lyr_Azrbaycanxritsi_1.setVisible(true);lyr_Torpaq_2.setVisible(true);lyr_Urbanizasiya_3.setVisible(true);lyr_Bitki_4.setVisible(true);lyr_Bataqlq_5.setVisible(true);lyr_Su_6.setVisible(true);lyr_Kndlrvrazisahlri_7.setVisible(true);
var layersList = [lyr_Krdmir_0,lyr_Azrbaycanxritsi_1,lyr_Torpaq_2,lyr_Urbanizasiya_3,lyr_Bitki_4,lyr_Bataqlq_5,lyr_Su_6,lyr_Kndlrvrazisahlri_7];
lyr_Krdmir_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'TypeAU': 'TypeAU', 'Subordinat': 'Subordinat', 'StatCode': 'StatCode', 'EconomRe': 'EconomRe', 'Area': 'Area', 'Perimetr': 'Perimetr', 'Note': 'Note', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Kndlrvrazisahlri_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'UrbanName': 'UrbanName', 'UrbanNum': 'UrbanNum', 'StatCode': 'StatCode', 'Subordinat': 'Subordinat', 'Area': 'Area', 'Perimetr': 'Perimetr', 'Note': 'Note', 'IEDType': 'IEDType', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID_2': 'OBJECTID_2', 'Name_2': 'Name_2', 'TypeAU': 'TypeAU', 'Subordinat_2': 'Subordinat_2', 'StatCode_2': 'StatCode_2', 'EconomRe': 'EconomRe', 'Area_2': 'Area_2', 'Perimetr_2': 'Perimetr_2', 'Note_2': 'Note_2', 'Shape_Leng_2': 'Shape_Leng_2', 'Shape_Area_2': 'Shape_Area_2', });
lyr_Krdmir_0.set('fieldImages', {'OBJECTID': 'Range', 'Name': 'TextEdit', 'TypeAU': 'Range', 'Subordinat': 'TextEdit', 'StatCode': 'TextEdit', 'EconomRe': 'TextEdit', 'Area': 'TextEdit', 'Perimetr': 'TextEdit', 'Note': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Kndlrvrazisahlri_7.set('fieldImages', {'OBJECTID': 'Range', 'Name': 'TextEdit', 'UrbanName': 'TextEdit', 'UrbanNum': 'Range', 'StatCode': 'TextEdit', 'Subordinat': 'TextEdit', 'Area': 'TextEdit', 'Perimetr': 'TextEdit', 'Note': 'TextEdit', 'IEDType': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID_2': 'Range', 'Name_2': 'TextEdit', 'TypeAU': 'Range', 'Subordinat_2': 'TextEdit', 'StatCode_2': 'TextEdit', 'EconomRe': 'TextEdit', 'Area_2': 'TextEdit', 'Perimetr_2': 'TextEdit', 'Note_2': 'TextEdit', 'Shape_Leng_2': 'TextEdit', 'Shape_Area_2': 'TextEdit', });
lyr_Krdmir_0.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'TypeAU': 'no label', 'Subordinat': 'no label', 'StatCode': 'no label', 'EconomRe': 'no label', 'Area': 'no label', 'Perimetr': 'no label', 'Note': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Kndlrvrazisahlri_7.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'UrbanName': 'no label', 'UrbanNum': 'no label', 'StatCode': 'no label', 'Subordinat': 'no label', 'Area': 'no label', 'Perimetr': 'no label', 'Note': 'no label', 'IEDType': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID_2': 'no label', 'Name_2': 'no label', 'TypeAU': 'no label', 'Subordinat_2': 'no label', 'StatCode_2': 'no label', 'EconomRe': 'no label', 'Area_2': 'no label', 'Perimetr_2': 'no label', 'Note_2': 'no label', 'Shape_Leng_2': 'no label', 'Shape_Area_2': 'no label', });
lyr_Kndlrvrazisahlri_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});