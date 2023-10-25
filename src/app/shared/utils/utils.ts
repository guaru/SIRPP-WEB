export default class Utils {

    /**
     * Control days - daySubtration
     *
     * @summary Make event days -daySubtration
     * @returns void
     */
    static calculateMonthBefore(daySubtration: number): Date {
        const f = new Date();
        f.setDate(f.getDate() - daySubtration);
        return f;
      }
}
