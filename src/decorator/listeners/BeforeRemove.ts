import {defaultMetadataStorage} from "../../typeorm";
import {EventListenerTypes} from "../../metadata-builder/types/EventListenerTypes";
import {EntityListenerMetadata} from "../../metadata-builder/metadata/EntityListenerMetadata";

/**
 * Calls a method on which this decorator is applied before this entity removal.
 */
export function BeforeRemove() {
    return function (object: Object, propertyName: string) {
        defaultMetadataStorage().addEntityListenerMetadata(new EntityListenerMetadata(
            object.constructor, 
            propertyName, 
            EventListenerTypes.BEFORE_REMOVE
        ));
    };
}